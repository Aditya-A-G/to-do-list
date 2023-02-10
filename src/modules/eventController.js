import PubSub from "pubsub-js";
import * as DOMService from "./DOMService";
// ref

const createProjectButton = document.querySelector(".createProject");
const closeProjectFormButton = document.querySelector(".closeProjectForm");
const addTaskButton = document.querySelector(".addTask");
const closeTaskFormButton = document.querySelector(".closeTaskForm");
const projectSubmitButton = document.querySelector("#projectSubmit");
const taskForm = document.querySelector("#taskForm");

PubSub.subscribe("projectAddedToDom", (eventName, projectDiv) => {
  projectDiv.addEventListener("click", (e) => {
    const projectId = e.target.getAttribute("data-projectId");
    PubSub.publish("projectClicked", projectId);
  });
});
PubSub.subscribe(
  "taskAddedToDom",
  (eventName, { taskDiv, taskName, taskDueDate }) => {
    taskDiv.addEventListener("click", (e) => {
      let projectId;
      let taskId;
      if (e.srcElement.localName == "p") {
        projectId = e.target.parentElement.getAttribute("data-projectId");
        taskId = e.target.parentElement.getAttribute("data-taskId");
      } else {
        projectId = e.target.getAttribute("data-projectId");
        taskId = e.target.getAttribute("data-taskId");
      }

      PubSub.publish("taskClicked", [projectId, taskId]);
    });
  }
);

PubSub.subscribe("editButtonAdded",(eventName, editButton)=>{
  editButton.addEventListener("click", ()=>{
    PubSub.publish("editButtonClicked");
  })
} );

export default function init() {
  createProjectButton.addEventListener("click", DOMService.openProjectForm);
  closeProjectFormButton.addEventListener("click", DOMService.closeProjectForm);
  addTaskButton.addEventListener("click", DOMService.openTaskForm);
  closeTaskFormButton.addEventListener("click", (e)=>{
    PubSub.publish("closeTaskButtonClicked", e);
  });

  projectSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    PubSub.publish("projectSubmitBtnClicked", e);
  });

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    PubSub.publish("taskSubmitBtnClicked", e);
  });
}
