import PubSub from "pubsub-js";
import eventController from "./eventController";
import * as projectStructurer from "./projectStructurer";
import initialize from "./localStorage";

function storageAvailable() {
  let storage;
  try {
    storage = window.localStorage;
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

export default function init() {
  initialize();

  if (storageAvailable()) {
    if (!localStorage.getItem("projectId")) {
      PubSub.publishSync("updateLocalStorage", [
        projectStructurer.projectId,
        projectStructurer.currentProjectId,
        projectStructurer.projects,
      ]);

      PubSub.publish("dataIsNotAlreadyPresent");
    } else {
      PubSub.publishSync("dataIsAlreadyPresent");
    }
  }
  eventController();
}
