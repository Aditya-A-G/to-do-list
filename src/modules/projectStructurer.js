import PubSub from "pubsub-js";
import Project from "./project";
import Task from "./task";

const projects = [
  { name: "Default Project", projectId: 1, taskId: 0, tasks: [] },
];

let projectId = 1;
let currentProjectId = 1;

function addProject(eventName, payload) {
  projectId += 1;
  const projectObj = Project(payload, projectId);
  projects.push(projectObj);
  PubSub.publish("projectObjCreated", projectObj);
}

function addTask(eventName, payload) {
  projects.forEach((obj) => {
    if (currentProjectId == obj.projectId) {
      obj.taskId += 1;
      const taskObj = Task(payload, currentProjectId, obj.taskId);
      obj.tasks.push(taskObj);
      PubSub.publish("taskObjCreated", taskObj);
    }
  });
}

function showTasks(eventName, clickedProjectId) {
  if (currentProjectId != clickedProjectId) {
    PubSub.publish("clearTasksContainer");
    currentProjectId = clickedProjectId;
    projects.forEach((obj) => {
      if (obj.projectId == clickedProjectId) {
        obj.tasks.forEach((task) => {
          PubSub.publish("displayTask", task);
        });
      }
    });
  }
}

function showTaskInfo(eventName, [clickedProjectId, taskId]) {
  projects.forEach((obj) => {
    if (clickedProjectId == obj.projectId) {
      obj.tasks.forEach((task) => {
        if (task.taskId == taskId) {
          PubSub.publish("displayTaskInfo", [task, clickedProjectId, taskId]);
        }
      });
    }
  });
}
PubSub.publish("projectObjCreated", projects[0]);
PubSub.subscribe("projectSubmitBtnClicked", addProject);
PubSub.subscribe("taskSubmitBtnClicked", (eventName, e) => {
  if (
    e.srcElement.hasAttribute("data-projectId") ||
    e.srcElement.hasAttribute("data-taskId")
  ) {
    const projectID = e.srcElement.getAttribute("data-projectId");
    const taskID = e.srcElement.getAttribute("data-taskId");

    projects.forEach((obj) => {
      if (obj.projectId == projectID) {
        obj.tasks.forEach((task) => {
          if (task.taskId == taskID) {
            task.name = e.target[0].value;
            task.note = e.target[1].value;
            task.dueDate = e.target[2].value;
            task.priority = e.target[3].checked
              ? "low"
              : e.target[4].checked
              ? "medium"
              : e.target[5].checked
              ? "high"
              : false;
            task.isCompleted = e.target[6].checked;
            PubSub.publish("reRenderTask", task)
          }
        });
      }
    });
  } else {
    addTask("taskSubmitBtnClicked", e);
  }
  PubSub.publish("closeTaskButtonClicked", e);
});
PubSub.subscribe("projectClicked", showTasks);
PubSub.subscribe("taskClicked", showTaskInfo);
