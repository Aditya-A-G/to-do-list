export default function Tasks(e, Id, taskID) {
  console.log(e);
  const projectId = Id;
  const taskId = taskID;
  let name = e.target[0].value;
  let note = e.target[1].value;
  let dueDate = e.target[2].value;
  let priority = e.target[3].checked
    ? "low"
    : e.target[4].checked
    ? "medium"
    : e.target[5].checked
    ? "high"
    : false;
  let isCompleted = e.target[6].checked;
  console.log(priority);
  return { projectId, taskId, name, note, dueDate, priority, isCompleted };
}
