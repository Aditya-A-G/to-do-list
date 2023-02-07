import PubSub from "pubsub-js";

const projectPopUpForm = document.querySelector("#projectPopUp");
const taskPopUpForm = document.querySelector("#popUp");
const main = document.querySelector(".main");
const projectsContainer = document.querySelector(".projects");
const tasksContainer = document.querySelector(".tasks");

export function openProjectForm() {
  projectPopUpForm.classList.add("active");
  main.classList.add("blur");
}

export function closeProjectForm() {
  projectPopUpForm.classList.toggle("active");
  main.classList.toggle("blur");
}

export function openTaskForm() {
  taskPopUpForm.classList.add("active");
  main.classList.add("blur");
}

export function closeTaskForm() {
  taskPopUpForm.classList.toggle("active");
  main.classList.toggle("blur");
}

function addProjectToDom(eventName, obj) {
  const projectDiv = document.createElement("div");
  const projectName = document.createElement("p");

  projectDiv.setAttribute("data-projectId", obj.projectId);
  projectName.textContent = obj.name;

  projectDiv.classList.add("project");

  projectDiv.appendChild(projectName);
  projectsContainer.appendChild(projectDiv);
  PubSub.publish("projectAddedToDom", projectDiv);
}

function addTaskToDom(eventName, obj) {
  const taskDiv = document.createElement("div");
  const taskName = document.createElement("p");
  const taskDueDate = document.createElement("p");

  taskDiv.setAttribute("data-projectId", obj.projectId);
  taskDiv.setAttribute("data-taskId", obj.taskId);

  taskName.textContent = obj.name;
  taskDueDate.textContent = obj.dueDate;

  taskDiv.classList.add("task");

  taskDiv.appendChild(taskName);
  taskDiv.appendChild(taskDueDate);
  tasksContainer.appendChild(taskDiv);

  PubSub.publish("taskAddedToDom", taskDiv);
}

PubSub.subscribe("projectObjCreated", addProjectToDom);
PubSub.subscribe("taskObjCreated", addTaskToDom);
PubSub.subscribe("projectSubmitBtnClicked", closeProjectForm);
PubSub.subscribe("taskSubmitBtnClicked", closeTaskForm);
