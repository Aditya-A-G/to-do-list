import PubSub from "pubsub-js";
import Project from "./project";
import Task from "./task";

const projects = [];
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
    if (currentProjectId === obj.id) {
      obj.taskId += 1;
      const taskObj = Task(payload, currentProjectId, obj.taskId);
      obj.tasks.push(taskObj);
    }
  });
}

PubSub.subscribe("projectSubmitBtnClicked", addProject);
PubSub.subscribe("taskSubmitBtnClicked", addTask);
