/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-cycle */
import { retrieveTask, generateSampleData } from './index';
import { changeProjects } from './changeProjects';
import { createTaskHtmlElements } from './createTaskHtmlElements';
import {
  retrieveProjectContainerClass,
  retrieveProjectBtn,
  loadingSavedProjects,
  customProjectsContainer,
} from './createProject';

const tasksList = [];

const hideAddNewProjectContainer = () => {
  const addProjectInputContainer = document.querySelector('.new-project');
  addProjectInputContainer.classList.add('show');
};

const retrieveCheckedEffect = (storedTask) => {
  if (storedTask.isChecked === true) {
    const tasksCards = document.querySelectorAll('.card-item');
    for (let i = 0; i < tasksCards.length; i++) {
      const checkBox = tasksCards[i].children[0].children[0];
      const taskTitle = tasksCards[i].children[1].children[0];
      const taskDetails = tasksCards[i].children[1].children[1];
      const taskDueDate = tasksCards[i].children[2];

      if (storedTask.title === taskTitle.textContent) {
        checkBox.checked = true;
        tasksCards[i].style.backgroundColor = '#57575775';
        taskTitle.style.textDecoration = 'line-through';
        taskDetails.style.textDecoration = 'line-through';
        taskDueDate.style.textDecoration = 'line-through';
      }
    }
  }
};

const retrieveLocalData = () => {
  if (localStorage.length === 0) {
    // empty the array
    tasksList.length = 0;
    generateSampleData();
  } else {
    const retrievedList = retrieveTask();
    tasksList.push(...retrievedList);
    // retrieving custom projects data
    const currentProjectClassNames = retrieveProjectContainerClass();
    const currentProjectsNames = retrieveProjectBtn();
    // default projects
    const projects = changeProjects();
    const workProjectContainer = projects[0];
    const studyProjectContainer = projects[1];
    const homeProjectContainer = projects[2];
    const gymProjectContainer = projects[3];

    const loadProjects = () => {
      if (!currentProjectClassNames) return;
      for (let i = 0; i < currentProjectClassNames.length; i++) {
        // this function will create customProjectsContainer to use it later
        loadingSavedProjects(
          currentProjectClassNames[i],
          currentProjectsNames[i],
        );
      }
    };
    loadProjects();

    // loading each task in its own project
    tasksList.forEach((storedTask) => {
      // format the date back to the original format
      const date = storedTask.dueDate;
      storedTask.dueDate = new Date(date);

      if (storedTask.project === 'work') {
        createTaskHtmlElements(storedTask, workProjectContainer);
      } else if (storedTask.project === 'study') {
        createTaskHtmlElements(storedTask, studyProjectContainer);
      } else if (storedTask.project === 'home') {
        createTaskHtmlElements(storedTask, homeProjectContainer);
      } else if (storedTask.project === 'gym') {
        createTaskHtmlElements(storedTask, gymProjectContainer);
      } else {
        for (let i = 0; i < currentProjectsNames.length; i++) {
          if (storedTask.project === currentProjectsNames[i]) {
            // customProjectsContainer is imported from createProject.js
            const currentProjectContainer = customProjectsContainer[i];
            createTaskHtmlElements(storedTask, currentProjectContainer);
          }
        }
      }
      // retrieve checked task's effect on current project
      retrieveCheckedEffect(storedTask);
    });
    hideAddNewProjectContainer();
  }
};

export { retrieveLocalData, tasksList, retrieveCheckedEffect };
