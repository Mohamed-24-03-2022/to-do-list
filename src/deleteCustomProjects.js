import { tasksList } from "./retrieveLocalData.js";
import {
    saveProjectContainerClass,
    saveProjectBtn,
    storedContainerArray,
    storedBtnArray,
} from "./createProject.js";
import { saveTask } from "./index.js";
import { changeProjects } from "./changeProjects.js"


const deleteCustomProjects = () => {
    const exitIcons = document.querySelectorAll("ul a span");
    exitIcons.forEach(exitIcon => {
        exitIcon.addEventListener("click", (e) => {
            const targetedProjectName = e.target.parentElement.children[0].textContent;
            const targetedProjectBtn = e.target.parentElement;
            const targetedProjectContainer = e.target.parentElement.parentElement.parentElement.parentElement.children[2].children[1];

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

            //!!!! append the previous project !!!!!!!!!!!!
            const mainContent = document.querySelector(".main-content");
            const workProject = document.createElement("div");
            workProject.textContent = "choose a project";

            mainContent.appendChild(workProject);
            console.log(workProject);

        });
    });
}
export { deleteCustomProjects };