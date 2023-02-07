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
  console.log("nice");
  projects.forEach((obj) => {
    if (currentProjectId === obj.projectId) {
      obj.taskId += 1;
      const taskObj = Task(payload, currentProjectId, obj.taskId);
      obj.tasks.push(taskObj);
      console.log(obj);
      PubSub.publish("taskObjCreated", taskObj);
    }
  });
}
PubSub.publish("projectObjCreated", projects[0]);
PubSub.subscribe("projectSubmitBtnClicked", addProject);
PubSub.subscribe("taskSubmitBtnClicked", addTask);
