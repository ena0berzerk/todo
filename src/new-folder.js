import Folder from './factories/folder';
import { formFolder } from './components/form-folder';

export default function newFolder() {
  const createFolder = Folder(formFolder.title.value);
  console.log(createFolder);
  console.log(createFolder.listOfTasks);
  return createFolder;
}

// create new DOM option element in form task select
function NewFolderOptionInTaskFormSelect() {
  const selectForm = document.querySelector('#set-folder');
  const createNewOption = document.createElement('option');
  createNewOption.textContent = `${formFolder.title.value}`;
  createNewOption.setAttribute(
    'value',
    `${formFolder.title.value.toLowerCase()}`
  );
  selectForm.append(createNewOption);
}

formFolder.form.addEventListener('submit', (_) => {
  _.preventDefault();
  newFolder();
  NewFolderOptionInTaskFormSelect();

  formFolder.title.value = '';
});
