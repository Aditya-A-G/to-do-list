import PubSub from "pubsub-js";

const projectPopUpForm = document.querySelector("#projectPopUp");
const taskPopUpForm = document.querySelector("#popUp");
const main = document.querySelector(".main");
const projectsContainer = document.querySelector(".projects");

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

function addProjectToDom(eventName, obj){
  const projectDiv = document.createElement("div");
  const projectName = document.createElement("p");

  projectName.textContent = obj.name;

  projectDiv.classList.add("project");
  projectDiv.appendChild(projectName);
  projectsContainer.appendChild(projectDiv);

}
PubSub.subscribe("projectObjCreated",addProjectToDom)