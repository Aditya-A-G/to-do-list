import PubSub from "pubsub-js";

function updateLocalStorage(
  eventName,
  [projectId, currentProjectId, projects]
) {
  localStorage.setItem("projectId", JSON.stringify(projectId));
  localStorage.setItem("currentProjectId", JSON.stringify(currentProjectId));
  localStorage.setItem("projects", JSON.stringify(projects));
}

function updateProjectId(eventName, projectId) {
  localStorage.setItem("projectId", JSON.stringify(projectId));
}

function updateCurrentProjectId(eventName, currentProjectId) {
  localStorage.setItem("currentProjectId", JSON.stringify(currentProjectId));
}

function updateProjectsArray(eventName, projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export default function initialize() {
  PubSub.subscribe("updateLocalStorage", updateLocalStorage);
  PubSub.subscribe("updateProjectId", updateProjectId);
  PubSub.subscribe("updateCurrentProjectId", updateCurrentProjectId);
  PubSub.subscribe("updateProjectArray", updateProjectsArray);
}
