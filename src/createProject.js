
import { removeProjects, addEventToProjects } from "./changeProjects.js";



const createProject = () => {
    const mainContent = document.querySelector(".main-content");
    const projectsList = document.querySelector(".side-bar ul");
    const addProject = document.querySelector(".new");
    const addProjectInputContainer = document.querySelector(".new-project");
    const addProjectInput = document.querySelector("#new-project");
    const addProjectBtn = document.querySelector(".new-project button");

    addProject.addEventListener("click", (e) => {
        addProjectInput.value = "";
        addProjectInputContainer.classList.toggle("show");
    });


    const newProjectsContainer = [];
    const newProjectsBtn = [];

    const createCustomProjectEvent = () => {
        console.log(newProjectsBtn, newProjectsContainer);
        for (let i = 0; i < newProjectsBtn.length; i++) {
            addEventToProjects(newProjectsBtn[i], newProjectsContainer[i]);
        }
    }

    addProjectBtn.addEventListener("click", (e) => {
        // make the form validation work without submitting ti
        const checkStatus = addProjectInput.checkValidity();
        addProjectInput.reportValidity();
        if (!checkStatus) {
            return;
        }

        const newProjectName = addProjectInput.value;
        const createProjectA = document.createElement("a");
        const createProjectLi = document.createElement("li");
        createProjectLi.classList.add("project", newProjectName)
        createProjectLi.textContent = newProjectName;
        createProjectA.appendChild(createProjectLi);
        projectsList.appendChild(createProjectA);

        // create container
        const projectContainerName = document.createElement("div");
        // variable class name
        projectContainerName.classList.add(`${newProjectName}-project`);
        projectContainerName.classList.add("project-container");
        // remove all other containers
        removeProjects();
        // append the new container
        mainContent.appendChild(projectContainerName);

        // add event to the new projectBtn
        newProjectsBtn.push(createProjectLi);
        newProjectsContainer.push(projectContainerName);
        createCustomProjectEvent();
        // hide the input
        addProjectInputContainer.classList.toggle("show");
    });
}
export { createProject };