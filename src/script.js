import './css/style.scss';
import isDevWebpackMode from './is-dev';
import Folder from './factories/folder';
import Todo, { pushTaskToFolder } from './factories/todo';
import selectedFolder from './current-folder';
import submitFormTask from './new-task';
import newFolder from './new-folder';

selectedFolder();
submitFormTask();
