import Todo from './todo';
import { formTask } from './components/form-task';
import todoElement from './components/dom-tasks';

export const tasksList = [];

export function newTask() {
  const createTask = Todo(
    formTask.title.value,
    formTask.description.value,
    formTask.dueDate.value
  );
  tasksList.push(createTask);
  return createTask;
}

export default function submitFormTask() {
  formTask.form.addEventListener('submit', (_) => {
    _.preventDefault();
    newTask();
    todoElement(tasksList);

    console.log(tasksList);
    formTask.form.reset();
  });
}
