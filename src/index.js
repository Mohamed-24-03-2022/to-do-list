//! Implement OOP Single Responsibility Principle
//** Each entity must have one responsibility (must change for only a single reason)
//? I will separate DOM from the logic (can be ran on console or using DOM)
//todo Implement Firebase on this project

import "./style.css";
import { createTaskHtmlElements, restartFormValue } from "./createTaskHtmlElements.js";
import { priorityCheck } from "./priority.js";
import { changeProjects } from "./changeProjects.js";
import { createProject } from "./createProject.js";
const tasksList = [];
export { tasksList };


class todoGenerator {
    constructor(title, details, dueDate, priority) {
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isChecked = false;
    }
}
const createTask = () => {
    const mainContent = document.querySelector(".main-content");
    const addTaskCard = document.querySelector(".add-new-task");
    const form = document.querySelector("#form");
    const addBtn = document.querySelector(".add");
    const cancelBtn = document.querySelector(".cancel");

    addTaskCard.addEventListener("click", () => {
        form.style.visibility = "visible";
        mainContent.prepend(form);
        restartFormValue();
        const changeBtn = document.querySelector(".change");
        changeBtn.disabled = true;
        addBtn.disabled = false;
    });

    addBtn.addEventListener("click", (e) => {
        // make the form validation work without submitting ti
        const checkStatus = form.checkValidity();
        form.reportValidity();
        if (!checkStatus) {
            console.log("HEEEEEEEy");
            return
        }
        const titleInput = document.querySelector("#title");
        const detailsInput = document.querySelector("#details");
        const dueDateInput = document.querySelector("#due-date");
        const newTask = new todoGenerator(
            titleInput.value,
            detailsInput.value,
            dueDateInput.value,
            priorityCheck()
        );
        tasksList.push(newTask);
        // check for the current Project
        const checkCurrentProject = () => {
            const currentProject = e.target.parentElement.parentElement.parentElement.children[2];
            const currentProjectClass = currentProject.classList[0];
            return `.${currentProjectClass}`;
        };

        const currentProjectContainer = document.querySelector(checkCurrentProject());
        createTaskHtmlElements(newTask, currentProjectContainer);
        form.remove();
    });

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        form.remove();
    });

};
const generateSampleData = () => {
    const sampleTask1 = new todoGenerator("Eat", "", "", "low");
    const sampleTask2 = new todoGenerator("Sleep", "", "", "low");
    const sampleTask3 = new todoGenerator("Gym", "", "", "normal");
    const sampleTasks = [sampleTask1, sampleTask2, sampleTask3];
    const workProjectContainer = document.querySelector(".work-project");

    for (const sampleTask of sampleTasks) {
        tasksList.push(sampleTask);
        createTaskHtmlElements(sampleTask, workProjectContainer);
    }
};

createTask();
changeProjects();
generateSampleData();
createProject();

