import { priorityEffect } from "./priority.js";
import { editTask } from "./editTask.js";
import { format } from 'date-fns';

const createTaskHtmlElements = (newTask, projectContainer) => {
    // card item
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-item");

    // priority effect
    priorityEffect(cardContainer, newTask.priority);

    // checkbox
    const checkboxContainer = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkboxContainer.prepend(checkbox);

    // task (title and details)
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task");
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = newTask.title;
    const details = document.createElement("p");
    details.classList.add("details");
    details.textContent = newTask.details;
    taskContainer.prepend(title, details);

    // due date
    const dueDateContainer = document.createElement("div");
    dueDateContainer.classList.add("due-date");
    const dueDate = document.createElement("p");
    // date formatting 
    const formattedDate = format(newTask.dueDate, 'do LLL yy');
    dueDate.textContent = formattedDate;
    dueDateContainer.prepend(dueDate);

    // settings
    const settingsContainer = document.createElement("div");
    settingsContainer.classList.add("settings");
    const googleIcon = document.createElement("span");
    googleIcon.classList.add("material-symbols-outlined");
    googleIcon.textContent = "settings";

    const selectOption = document.createElement("div");
    selectOption.setAttribute("id", "select");
    selectOption.classList.add("show");

    const option1 = document.createElement("option");
    option1.classList.add("edit");
    option1.textContent = "Edit";

    const option2 = document.createElement("option");
    option2.classList.add("remove");
    option2.textContent = "remove";

    selectOption.prepend(option1, option2);
    settingsContainer.prepend(googleIcon, selectOption);


    // append all containers into the task
    cardContainer.prepend(
        checkboxContainer,
        taskContainer,
        dueDateContainer,
        settingsContainer
    );

    // append the task to the main container
    projectContainer.appendChild(cardContainer);

    const task = {
        cardContainer,
        googleIcon,
        settingsContainer,
        selectOption,
        option1,
        option2,
    };
    checkTask(checkbox, option2);
    chooseOption(task);
    removeTask(task);
    editTask(task);
    selectOption.remove();
};

const checkTask = (checkbox, removeOption) => {
    checkbox.addEventListener("click", () => {
        if (checkbox.checked === true) {
            removeOption.click();
        }
    });
};
const chooseOption = (task) => {
    task.googleIcon.addEventListener("click", () => {
        task.selectOption.classList.toggle("show");
        task.settingsContainer.prepend(task.selectOption);
    });
};
const removeTask = (task) => {
    task.option2.addEventListener("click", () => {
        task.selectOption.remove();
        task.cardContainer.remove();
    });
};

const restartFormValue = () => {
    const titleInput = document.querySelector("#title");
    const detailsInput = document.querySelector("#details");
    const dueDateInput = document.querySelector("#due-date");
    const radioBtn = {
        low: document.querySelector("#low"),
        normal: document.querySelector("#normal"),
        high: document.querySelector("#high"),
    };

    titleInput.value = "";
    detailsInput.value = "";
    dueDateInput.value = "";
    radioBtn.low.checked = true;
};

export { createTaskHtmlElements, restartFormValue };
