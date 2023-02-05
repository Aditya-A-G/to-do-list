export default function Projects(e, Id) {
  let name = e.target.form[0].value;
  const projectId = Id;
  let taskId = 0;
  let tasks = [];
  return { name, projectId, taskId, tasks };
}
