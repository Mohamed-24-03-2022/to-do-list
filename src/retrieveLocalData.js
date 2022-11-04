import { retrieveTask, generateSampleData } from "./index.js";
import { changeProjects } from "./changeProjects.js";
import { createTaskHtmlElements } from "./createTaskHtmlElements.js";
import {
    retrieveProjectContainerClass,
    retrieveProjectBtn,
    loadingSavedProjects,
    customProjectsContainer,
} from "./createProject.js";


let tasksList = [];
const hideNewProjectContainer = () => {
    const addProjectInputContainer = document.querySelector(".new-project");
    addProjectInputContainer.classList.add("show")
}
const retrieveLocalData = () => {
    if (localStorage.length === 0) {
        tasksList = [];
        generateSampleData();
    } else {
        tasksList = retrieveTask();
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
                loadingSavedProjects(currentProjectClassNames[i], currentProjectsNames[i]);
            }
        };
        loadProjects();

        // loading each task in its own project
        tasksList.forEach((storedTask) => {
            // format the date back
            const date = storedTask.dueDate;
            storedTask.dueDate = new Date(date);
            if (storedTask.project === "work") {
                createTaskHtmlElements(storedTask, workProjectContainer);
            } else if (storedTask.project === "study") {
                createTaskHtmlElements(storedTask, studyProjectContainer);
            } else if (storedTask.project === "home") {
                createTaskHtmlElements(storedTask, homeProjectContainer);
            } else if (storedTask.project === "gym") {
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
        });
        hideNewProjectContainer();
    }
};

export { retrieveLocalData, tasksList };
