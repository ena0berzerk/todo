import './css/style.scss';
import isDevWebpackMode from './is-dev';
import submitFormTask from './new-task';
import openModal, { closeModal } from './components/modal';
import domTaskList from './components/dom-tasks';

openModal();
closeModal();
submitFormTask();
