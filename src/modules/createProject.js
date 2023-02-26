/* eslint-disable import/no-duplicates */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
import { removeProjects, addEventToProjects } from './changeProjects';
import deleteCustomProjects from './deleteCustomProjects';
import { addHoverToBtn } from './changeProjects';
import {
  storedContainerArray, storedBtnArray, saveProjectContainerClass,
  saveProjectBtn,
  retrieveProjectContainerClass,
  retrieveProjectBtn,
} from './projectsData';

let newProjectsContainer = [];
let newProjectsBtn = [];
// let storedContainerArray = [];
// let storedBtnArray = [];

const createProject = () => {
  const mainContent = document.querySelector('.main-content');
  const projectsList = document.querySelector('.side-bar ul');
  const addProject = document.querySelector('.new');
  const addProjectInputContainer = document.querySelector('.new-project');
  const addProjectInput = document.querySelector('#new-project');
  const addProjectBtn = document.querySelector('.new-project button');

  let projectContainerClass = retrieveProjectContainerClass();
  let projectBtn = retrieveProjectBtn();
  if (projectContainerClass) {
    storedContainerArray.push(...projectContainerClass);
    storedBtnArray.push(...projectBtn);
  }

  addProject.addEventListener('click', () => {
    addProjectInput.value = '';
    addProjectInputContainer.classList.toggle('show');
  });

  const createCustomProjectEvent = () => {
    for (let i = 0; i < newProjectsBtn.length; i++) {
      addEventToProjects(newProjectsBtn[i], newProjectsContainer[i]);
    }
  };

  addProjectBtn.addEventListener('click', () => {
    // make the form validation work without submitting ti
    const checkStatus = addProjectInput.checkValidity();
    addProjectInput.reportValidity();
    if (!checkStatus) {
      return;
    }

    // create projectBtn
    const newProjectName = addProjectInput.value;
    const createProjectA = document.createElement('a');
    const createProjectLi = document.createElement('li');
    createProjectLi.classList.add('project', newProjectName);
    createProjectLi.textContent = newProjectName;
    createProjectA.appendChild(createProjectLi);
    projectsList.appendChild(createProjectA);
    // create exit icon
    const exitIcon = document.createElement('span');
    exitIcon.classList.add('material-symbols-outlined');
    exitIcon.textContent = 'close';
    createProjectA.appendChild(exitIcon);

    // create container
    const projectContainerName = document.createElement('div');
    // variable class name
    projectContainerName.classList.add(`${newProjectName}-project`);
    projectContainerName.classList.add('project-container');
    // remove all other containers
    removeProjects();
    // append the new container
    mainContent.appendChild(projectContainerName);

    // save it to an array to add the event
    newProjectsContainer.push(projectContainerName);
    newProjectsBtn.push(createProjectLi);

    // save project to local storage
    storedContainerArray.push(projectContainerName.classList[0]);
    storedBtnArray.push(createProjectLi.textContent);

    saveProjectContainerClass();
    saveProjectBtn();

    // add event to the new projectBtn
    createCustomProjectEvent();

    // hide the input
    addProjectInputContainer.classList.toggle('show');

    // adding delete functionality
    deleteCustomProjects();

    // adding hover effect to new created project btn
    addHoverToBtn(createProjectLi);
  });
};

// creating/retrieving stocked projects
const customProjectsContainer = [];
const loadingSavedProjects = (className, name) => {
  const mainContent = document.querySelector('.main-content');
  const projectsList = document.querySelector('.side-bar ul');
  const addProjectInputContainer = document.querySelector('.new-project');

  const createCustomProjectEvent = () => {
    for (let i = 0; i < newProjectsBtn.length; i++) {
      addEventToProjects(newProjectsBtn[i], newProjectsContainer[i]);
    }
  };

  // create projectBtn
  const newProjectName = name;
  const createProjectA = document.createElement('a');
  const createProjectLi = document.createElement('li');
  createProjectLi.classList.add('project', newProjectName);
  createProjectLi.textContent = newProjectName;
  createProjectA.appendChild(createProjectLi);
  projectsList.appendChild(createProjectA);
  // create exit icon
  const exitIcon = document.createElement('span');
  exitIcon.classList.add('material-symbols-outlined');
  exitIcon.textContent = 'close';
  createProjectA.appendChild(exitIcon);

  // create container
  const projectContainerName = document.createElement('div');
  // variable class name
  projectContainerName.classList.add(`${className}`);
  projectContainerName.classList.add('project-container');
  // remove all other containers
  removeProjects();
  // append the new container
  mainContent.appendChild(projectContainerName);

  // save it to an array to add the event
  newProjectsContainer.push(projectContainerName);
  newProjectsBtn.push(createProjectLi);

  // add event to the new projectBtn
  createCustomProjectEvent();

  // hide the input
  addProjectInputContainer.classList.toggle('show');
  customProjectsContainer.push(projectContainerName);

  // adding delete functionality
  deleteCustomProjects();

  // adding hover effect to new created project btn
  addHoverToBtn(createProjectLi);
};

export {
  createProject,
  loadingSavedProjects,
  customProjectsContainer,
};
