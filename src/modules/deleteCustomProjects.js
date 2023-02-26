/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
import tasksList from './tasksList';
import { saveTask } from './localStorageApi';
import {
  storedContainerArray,
  storedBtnArray,
  saveProjectContainerClass,
  saveProjectBtn,
} from './projectsData';

const deleteCustomProjects = () => {
  const exitIcons = document.querySelectorAll('ul a span');
  exitIcons.forEach((exitIcon) => {
    exitIcon.addEventListener('click', (e) => {
      const targetedProjectName = e.target.parentElement.children[0].textContent;
      const targetedProjectBtn = e.target.parentElement;
      const targetedProjectContainer = e.target.parentElement.parentElement.parentElement.parentElement
        .children[2].children[1];

      // remove project's tasks only
      for (const task of tasksList) {
        if (task.project === targetedProjectName) {
          const index = tasksList.indexOf(task);
          tasksList.splice(index, 1);
        }
      }

      // remove project from the stored arrays
      const btnIndex = storedContainerArray.indexOf(targetedProjectBtn);
      storedContainerArray.splice(btnIndex, 1);
      const containerIndex = storedBtnArray.indexOf(targetedProjectContainer);
      storedBtnArray.splice(containerIndex, 1);

      // save change on local storage
      saveProjectContainerClass();
      saveProjectBtn();
      saveTask();

      // remove btn and container from the dom
      targetedProjectBtn.remove();
      targetedProjectContainer.remove();

      // append the default project "work project"
      const workProjectBtn = document.querySelector('li.work');
      workProjectBtn.click();
    });
  });
};
export default deleteCustomProjects;
