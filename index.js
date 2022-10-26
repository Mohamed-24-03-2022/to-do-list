//! Implement OOP Single Responsibility Principle
//** Each entity must have one responsibility (must change for only a single reason)
//? I will separate DOM from the logic (can be ran on console or using DOM)
//todo Implement Firebase on this project

class todoGenerator {
    constructor(title, details, dueDate, priority) {
        this.title = title;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isChecked = false;
    }
}
const mainContent = document.querySelector(".main-content");

const createHtmlElements = (newTask) => {

    // card item
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-item");

    // checkbox
    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkboxContainer.prepend(checkbox);

    // task
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = newTask.title; //? fill it later from the form
    const details = document.createElement("p");
    details.classList.add("details");
    details.textContent = newTask.details; //? fill it later from the form
    taskContainer.prepend(title, details);

    // due date
    const dueDateContainer = document.createElement("div");
    dueDateContainer.classList.add("due-date");
    const dueDate = document.createElement("p");
    dueDate.textContent = newTask.dueDate; //? fill it later from the form
    dueDateContainer.prepend(dueDate);

    // settings
    const settingsContainer = document.createElement("div");
    settingsContainer.classList.add("settings");
    const googleIcon = document.createElement("span");
    googleIcon.classList.add("material-symbols-outlined");
    googleIcon.textContent = "settings";

    const select = document.createElement("select");
    select.setAttribute("id", "settings");
    const option1 = document.createElement("option");
    option1.setAttribute("value", "edit");
    option1.textContent = "Edit";
    const option2 = document.createElement("option");
    option2.setAttribute("value", "remove");
    option2.textContent = "remove";
    select.prepend(option1, option2);
    settingsContainer.prepend(googleIcon, select);

    // append all containers
    cardContainer.prepend(checkboxContainer, taskContainer, dueDateContainer, settingsContainer);

    // append the task to the main container
    mainContent.prepend(cardContainer);
};


const createTask = (() => {
    const addBtn = document.querySelector(".add");
    const cancelBtn = document.querySelector(".cancel");
    const form = document.querySelector("#form");
    form.remove();

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const titleInput = document.querySelector("#title");
        const detailsInput = document.querySelector("#details");
        const dueDateInput = document.querySelector("#due-date");
        const newTask = new todoGenerator(
            titleInput.value,
            detailsInput.value,
            dueDateInput.value
        );
        createHtmlElements(newTask);
        form.remove();
    });
    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        form.remove();
    })
    return { form };
})();

const addNewTask = (() => {
    const addTaskBtn = document.querySelector(".add-new-task");
    addTaskBtn.addEventListener("click", () => {
        mainContent.appendChild(createTask.form);
    })
})();