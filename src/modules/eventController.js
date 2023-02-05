import PubSub from "pubsub-js";
import * as DOMService from './DOMService';
// ref


const createProjectButton = document.querySelector(".createProject");
const closeProjectFormButton = document.querySelector(".closeProjectForm");
const addTaskButton = document.querySelector(".addTask");
const closeTaskFormButton = document.querySelector(".closeTaskForm");
const taskSubmitButton = document.querySelector("#taskSubmit");
const projectSubmitButton = document.querySelector("#projectSubmit");



export default function init() {
  createProjectButton.addEventListener("click", DOMService.openProjectForm);
  closeProjectFormButton.addEventListener("click", DOMService.closeProjectForm);
  addTaskButton.addEventListener("click", DOMService.openTaskForm);
  closeTaskFormButton.addEventListener("click", DOMService.closeTaskForm);

  projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    PubSub.publish("projectSubmitBtnClicked", e);
  });

  taskSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    PubSub.publish("taskSubmitBtnClicked", e);
  });
}
