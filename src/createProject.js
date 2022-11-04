
import { removeProjects, addEventToProjects } from "./changeProjects.js";


let newProjectsContainer = [];
let newProjectsBtn = [];
let storedContainerArray = [];
let storedBtnArray = [];

const saveProjectContainerClass = () => {
    return localStorage.setItem("ProjectContainerClass", JSON.stringify(storedContainerArray));
}
const retrieveProjectContainerClass = () => {
    return JSON.parse(localStorage.getItem("ProjectContainerClass"));
}
const saveProjectBtn = () => {
    return localStorage.setItem("projectBtn", JSON.stringify(storedBtnArray));
}
const retrieveProjectBtn = () => {
    return JSON.parse(localStorage.getItem("projectBtn"));
}

const createProject = () => {
    const mainContent = document.querySelector(".main-content");
    const projectsList = document.querySelector(".side-bar ul");
    const addProject = document.querySelector(".new");
    const addProjectInputContainer = document.querySelector(".new-project");
    const addProjectInput = document.querySelector("#new-project");
    const addProjectBtn = document.querySelector(".new-project button");

    if (retrieveProjectContainerClass()) {
        storedContainerArray = retrieveProjectContainerClass();
        storedBtnArray = retrieveProjectBtn();
    }

    addProject.addEventListener("click", (e) => {
        addProjectInput.value = "";
        addProjectInputContainer.classList.toggle("show");
    });

    const createCustomProjectEvent = () => {
        for (let i = 0; i < newProjectsBtn.length; i++) {
            addEventToProjects(newProjectsBtn[i], newProjectsContainer[i]);
        }
    }

    addProjectBtn.addEventListener("click", () => {
        // make the form validation work without submitting ti
        const checkStatus = addProjectInput.checkValidity();
        addProjectInput.reportValidity();
        if (!checkStatus) {
            return;
        }

        // create projectBtn
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
        addProjectInputContainer.classList.toggle("show");
    });
}

// creating/retrieving stocked projects
const customProjectsContainer = [];
const loadingSavedProjects = (className, name) => {
    const mainContent = document.querySelector(".main-content");
    const projectsList = document.querySelector(".side-bar ul");
    const addProjectInputContainer = document.querySelector(".new-project");

    const createCustomProjectEvent = () => {
        for (let i = 0; i < newProjectsBtn.length; i++) {
            addEventToProjects(newProjectsBtn[i], newProjectsContainer[i]);
        }
    }

    // create projectBtn
    const newProjectName = name;
    const createProjectA = document.createElement("a");
    const createProjectLi = document.createElement("li");
    createProjectLi.classList.add("project", newProjectName);
    createProjectLi.textContent = newProjectName;
    createProjectA.appendChild(createProjectLi);
    projectsList.appendChild(createProjectA);

    // create container
    const projectContainerName = document.createElement("div");
    // variable class name
    projectContainerName.classList.add(`${className}`);
    projectContainerName.classList.add("project-container");
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
    addProjectInputContainer.classList.toggle("show");
    customProjectsContainer.push(projectContainerName);
};



export {
    createProject,
    retrieveProjectContainerClass,
    retrieveProjectBtn,
    loadingSavedProjects,
    customProjectsContainer,
};