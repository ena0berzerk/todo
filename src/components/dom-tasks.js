import { tasksList } from '../new-task';
import { formTask } from './form-task';

const container = document.querySelector('.container');
const wrapperTodos = document.createElement('div');
wrapperTodos.classList.add('todo-lists');
wrapperTodos.style.display = 'block';

// need to implement uniq id on each todo div

export default function todoElement() {
  const wrapTodo = document.createElement('div');
  wrapTodo.classList.add('todo-wrap');
  wrapTodo.dataset.priority = `${formTask.priority.value}`;
  // title
  const titleP = document.createElement('p');
  titleP.classList.add('title-p');
  titleP.textContent = formTask.title.value;
  // circle
  const circle = document.createElement('span');
  circle.classList.add('circle');

  circle.addEventListener('click', (_) => {
    _.target.parentNode.classList.toggle('todo-done-border');
    circle.classList.toggle('circle-done');
    titleP.classList.toggle('p-done');

    tasksList.forEach((task) => {
      if (task.priority === _.target.parentNode.dataset.priority) {
        tasksList.splice(task, 1);
        console.log(tasksList);
      }

      console.log(_.target.parentNode);
    });
  });

  container.appendChild(wrapperTodos);
  wrapperTodos.appendChild(wrapTodo);
  wrapTodo.append(circle, titleP);
}
