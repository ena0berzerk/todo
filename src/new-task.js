import Todo, { pushTaskToFolder } from './factories/todo';
import { formTask } from './components/form-task';

export function newTask() {
  const createTask = Todo(
    formTask.title.value,
    formTask.description.value,
    formTask.priority.value,
    formTask.dueDate.value,
    formTask.folder.value
  );
  console.log(createTask);
  return createTask;
}

export default function submitFormTask() {
  formTask.form.addEventListener('submit', (_) => {
    _.preventDefault();
    newTask();
  });
}
