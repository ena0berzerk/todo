import Folder from './factories/folder';
import { formTask } from './components/form-task';
import { pushTaskToFolder } from './factories/todo';
import { newTask } from './new-task';

// export default function defaultFolder() {
//   const folder = Folder('default');
//   formTask.folder = folder.title;
//   pushTaskToFolder(folder.listOfTasks, newTask);
//   return folder;
// }

const defaultFolder = Folder(`${formTask.folder.value}`);

export default function selectedFolder() {
  let currentSelect = formTask.folder.value;

  return currentSelect;
}
