import PubSub from "pubsub-js";

const projectPopUpForm = document.querySelector("#projectPopUp");
const taskPopUpForm = document.querySelector("#popUp");
const main = document.querySelector(".main");
const projectsContainer = document.querySelector(".projects");
const tasksContainer = document.querySelector(".tasks");
const taskForm = document.querySelector("#taskForm");
const taskFormNameField = document.querySelector("#name");
const taskFormNoteField = document.querySelector("#note");
const taskFormDateField = document.querySelector("#date");
const taskFormPriorityLow = document.querySelector("#low");
const taskFormPriorityMedium = document.querySelector("#medium");
const taskFormPriorityHigh = document.querySelector("#high");
const taskFormCheckbox = document.querySelector("#checkbox");
const submitWrapper = document.querySelector("#taskSubmitWrapper");
const editTaskButton = document.createElement("button");
const saveTaskButton = document.createElement("button");

function displayTaskInfo(eventName, [task, projectId, taskId]) {
  openTaskForm();

  taskForm.setAttribute("data-projectId", projectId);
  taskForm.setAttribute("data-taskId", taskId);

  taskFormNameField.value = task.name;
  taskFormNoteField.value = task.note;
  taskFormDateField.value = task.dueDate;
  if (task.priority == "low") {
    taskFormPriorityLow.checked = true;
    taskFormPriorityMedium.checked = false;
    taskFormPriorityHigh.checked = false;
  } else if (task.priority == "medium") {
    taskFormPriorityLow.checked = false;
    taskFormPriorityMedium.checked = true;
    taskFormPriorityHigh.checked = false;
  } else {
    taskFormPriorityLow.checked = false;
    taskFormPriorityMedium.checked = false;
    taskFormPriorityHigh.checked = true;
  }

  taskFormCheckbox.checked = task.isCompleted;

  //disable

  taskForm.style.pointerEvents = "none";
  taskFormNoteField.setAttribute("readOnly", true);
  taskFormDateField.setAttribute("readOnly", true);
  taskFormNameField.setAttribute("readOnly", true);

  if (submitWrapper.lastElementChild) {
    submitWrapper.removeChild(submitWrapper.lastElementChild);
  }
  editTaskButton.textContent = "Edit";
  taskPopUpForm.appendChild(editTaskButton);

  PubSub.publish("editButtonAdded", editTaskButton);
}

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

export function closeTaskForm(eventName, e) {
  taskPopUpForm.classList.toggle("active");
  main.classList.toggle("blur");

  if (
    taskForm.hasAttribute("data-projectId") ||
    taskForm.hasAttribute("data-taskId")
  ) {
    taskForm.style.pointerEvents = "all";
    taskFormNoteField.removeAttribute("readOnly");
    taskFormDateField.removeAttribute("readOnly");
    taskFormNameField.removeAttribute("readOnly");

    taskForm.removeAttribute("data-projectId");
    taskForm.removeAttribute("data-taskId");
  }

  if (taskPopUpForm.contains(editTaskButton)) {
    taskPopUpForm.removeChild(editTaskButton);
    submitWrapper.appendChild(saveTaskButton);
  }
  if (taskForm.contains(saveTaskButton)) {
    saveTaskButton.textContent = "Add Task";
  }
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

  PubSub.publish("taskAddedToDom", { taskDiv, taskName, taskDueDate });
}

function clearTasksContainer() {
  let child = tasksContainer.lastElementChild;
  while (child) {
    tasksContainer.removeChild(child);
    child = tasksContainer.lastElementChild;
  }
}

function makeFormEditable() {
  taskForm.style.pointerEvents = "all";
  taskFormNoteField.removeAttribute("readOnly");
  taskFormDateField.removeAttribute("readOnly");
  taskFormNameField.removeAttribute("readOnly");

  if (taskPopUpForm.contains(editTaskButton)) {
    taskPopUpForm.removeChild(editTaskButton);
  }

  saveTaskButton.textContent = "Save";
  submitWrapper.appendChild(saveTaskButton);
}

function updateTask(eventName, taskObj) {
  const tasks = tasksContainer.childNodes;
  console.log(tasks);
  tasks.forEach((task) => {
    let projectId = task.getAttribute("data-projectId");
    let taskId = task.getAttribute("data-taskId");
    if (taskObj.projectId == projectId && taskObj.taskId == taskId) {
      const childNodes = task.childNodes;
      console.log(childNodes);
      childNodes[0].textContent = taskObj.name;
      childNodes[1].textContent = taskObj.dueDate;
    }
  });
}

PubSub.subscribe("projectObjCreated", addProjectToDom);
PubSub.subscribe("taskObjCreated", addTaskToDom);
PubSub.subscribe("projectSubmitBtnClicked", closeProjectForm);
PubSub.subscribe("displayTask", addTaskToDom);
PubSub.subscribe("clearTasksContainer", clearTasksContainer);
PubSub.subscribe("displayTaskInfo", displayTaskInfo);
PubSub.subscribe("editButtonClicked", makeFormEditable);
PubSub.subscribe("closeTaskButtonClicked", closeTaskForm);
PubSub.subscribe("reRenderTask", updateTask);
