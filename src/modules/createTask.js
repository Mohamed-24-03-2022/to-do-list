/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */

import { format } from 'date-fns';
import './style.css';

import createTaskHtmlElements from './createTaskHtmlElements';
import { restartFormValue } from './editTask';
import { priorityCheck } from './priority';
import tasksList from './tasksList';
import { saveTask } from './localStorageApi';
import TodoGenerator from './TodoGenerator';

const createTask = () => {
  const mainContent = document.querySelector('.main-content');
  const addTaskCard = document.querySelector('.add-new-task');
  const form = document.querySelector('#form');
  const addBtn = document.querySelector('.add');
  const cancelBtn = document.querySelector('.cancel');
  const changeBtn = document.querySelector('.change');
  const dueDateInput = document.querySelector('#due-date');

  addTaskCard.addEventListener('click', () => {
    form.style.visibility = 'visible';
    mainContent.prepend(form);
    restartFormValue();
    // default date as today's date
    dueDateInput.value = format(new Date(), 'yyyy-MM-dd');
    changeBtn.disabled = true;
    addBtn.disabled = false;
  });

  addBtn.addEventListener('click', (e) => {
    // make the form validation work without submitting ti
    const checkStatus = form.checkValidity();
    form.reportValidity();
    if (!checkStatus) {
      return;
    }

    const titleInput = document.querySelector('#title');
    const detailsInput = document.querySelector('#details');
    // date formatting
    const dueDateInputSplitted = dueDateInput.value.split('');
    const date = {
      year: dueDateInputSplitted.splice(0, 4).join(''),
      month: dueDateInputSplitted.splice(1, 2).join(''),
      day: dueDateInputSplitted.splice(2, 3).join(''),
    };

    // check for the current project class
    const checkCurrentProjectClass = () => {
      const currentProject = e.target.parentElement.parentElement.parentElement.children[2];
      const currentProjectClass = currentProject.classList[0];
      return currentProjectClass;
    };

    if (!checkCurrentProjectClass()) return;

    // check for the current project name
    const currentProjectSplitted = checkCurrentProjectClass().split('');
    const index = currentProjectSplitted.indexOf('-');
    currentProjectSplitted.splice(index, currentProjectSplitted.length);
    const currentProject = currentProjectSplitted.join('');

    // new task object
    const newTask = new TodoGenerator(
      titleInput.value,
      detailsInput.value,
      new Date(date.year, date.month - 1, date.day),
      priorityCheck(),
      currentProject,
    );
    tasksList.push(newTask);
    saveTask();

    // select the new container
    const currentProjectContainer = document.querySelector(
      `.${checkCurrentProjectClass()}`,
    );
    createTaskHtmlElements(newTask, currentProjectContainer);
    form.remove();
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.remove();
  });
};

export default createTask;
