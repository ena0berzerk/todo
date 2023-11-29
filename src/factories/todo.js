export default function Todo(title, description, priority, dueDate, folder) {
  return { title, description, priority, dueDate, folder };
}

export function pushTaskToFolder(folder, instance) {
  return folder.push(instance);
}
