import { formTask } from './form-task';

const container = document.querySelector('.container');
const wrapperTodos = document.createElement('div');
wrapperTodos.classList.add('todo-lists');
wrapperTodos.style.display = 'block';

export default function todoElement(taskList) {
  const wrapTodo = document.createElement('div');
  wrapTodo.classList.add('todo-wrap');

  // circle
  const circle = document.createElement('span');
  circle.classList.add('circle');

  // title
  const titleP = document.createElement('p');
  titleP.classList.add('title-p');
  titleP.textContent = formTask.title.value;

  // description
  const descriptionP = document.createElement('p');
  descriptionP.classList.add('description-p');
  descriptionP.textContent = formTask.description.value;

  // date
  const dateP = document.createElement('p');
  dateP.classList.add('date-p');
  dateP.textContent = formTask.dueDate.value;

  const wrapForTitleDateDescription = document.createElement('div');
  wrapForTitleDateDescription.classList.add('wrap-tdd');
  wrapForTitleDateDescription.append(titleP, dateP, descriptionP);

  circle.addEventListener('click', (_) => {
    _.target.parentNode.classList.toggle('todo-done-border');
    circle.classList.toggle('circle-done');
    titleP.classList.toggle('p-done');
    descriptionP.classList.toggle('p-done');
    dateP.classList.toggle('p-done');

    taskList.forEach((task) => {
      if (task.priority === _.target.parentNode.dataset.priority) {
        taskList.splice(task, 1);
        console.log(taskList);
      }

      console.log(_.target.parentNode);
    });
  });

  container.appendChild(wrapperTodos);
  wrapperTodos.appendChild(wrapTodo);
  wrapTodo.append(circle, wrapForTitleDateDescription);
}
