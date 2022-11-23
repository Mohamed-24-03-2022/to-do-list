/* eslint-disable import/no-cycle */
//! Implement OOP Single Responsibility Principle
//* * Each entity must have one responsibility (must change for only a single reason)
// ? I will separate DOM from the logic (can be ran on console or using DOM)

import { format } from 'date-fns';
import './style.css';
import {
  createTaskHtmlElements,
  restartFormValue,
} from './createTaskHtmlElements';
import { priorityCheck } from './priority';
import { changeProjects } from './changeProjects';
import { createProject } from './createProject';
import { retrieveLocalData, tasksList } from './retrieveLocalData';

class TodoGenerator {
  constructor(title, details, dueDate, priority, project) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.isChecked = false;
  }
}

const saveTask = () => localStorage.setItem('tasks', JSON.stringify(tasksList));
const retrieveTask = () => JSON.parse(localStorage.getItem('tasks'));

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
      const currentProject = e.target.parentElement.parentElement
        .parentElement.children[2];
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
    const currentProjectContainer = document.querySelector(`.${checkCurrentProjectClass()}`);
    createTaskHtmlElements(newTask, currentProjectContainer);
    form.remove();
  });

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.remove();
  });
};
const generateSampleData = () => {
  const sampleTask1 = new TodoGenerator('Eat', '', new Date(), 'low', 'work');
  const sampleTask2 = new TodoGenerator('Sleep', '', new Date(), 'low', 'work');
  const sampleTask3 = new TodoGenerator('Gym', '', new Date(), 'normal', 'work');
  const sampleTasks = [sampleTask1, sampleTask2, sampleTask3];
  const workProjectContainer = document.querySelector('.work-project');

  sampleTasks.forEach((sampleTask) => {
    tasksList.push(sampleTask);
    createTaskHtmlElements(sampleTask, workProjectContainer);
  });
  //   for (const sampleTask of sampleTasks) {
  //     tasksList.push(sampleTask);
  //     createTaskHtmlElements(sampleTask, workProjectContainer);
  //   }
  saveTask();
};
createTask();
changeProjects();
retrieveLocalData();
createProject();
// deleteCustomProjects();

export { saveTask, retrieveTask, generateSampleData };
