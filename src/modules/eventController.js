import PubSub from "pubsub-js";
import * as DOMService from "./DOMService";
// ref

const createProjectButton = document.querySelector(".createProject");
const closeProjectFormButton = document.querySelector(".closeProjectForm");
const addTaskButton = document.querySelector(".addTask");
const closeTaskFormButton = document.querySelector(".closeTaskForm");
const taskSubmitButton = document.querySelector("#taskSubmit");
const projectSubmitButton = document.querySelector("#projectSubmit");
const taskForm = document.querySelector("#taskForm");

PubSub.subscribe("projectAddedToDom", (eventName, projectDiv) => {
  // projectDiv.addEventListener("click", )
});
PubSub.subscribe("taskAddedToDom", (eventName, projectDiv) => {
  // taskDiv.addEventListener("click", )
});

export default function init() {
  createProjectButton.addEventListener("click", DOMService.openProjectForm);
  closeProjectFormButton.addEventListener("click", DOMService.closeProjectForm);
  addTaskButton.addEventListener("click", DOMService.openTaskForm);
  closeTaskFormButton.addEventListener("click", DOMService.closeTaskForm);

  projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    PubSub.publish("projectSubmitBtnClicked", e);
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    PubSub.publish("taskSubmitBtnClicked", e);
  });

  // taskSubmitButton.addEventListener("onSubmit", (e) => {
  //   console.log(e);
  //   e.preventDefault();
  //   console.log("yes");
  //   PubSub.publish("taskSubmitBtnClicked", e);
  // });
}
