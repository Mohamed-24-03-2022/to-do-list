import { priorityEffect } from "./priority.js";
import { editTask } from "./editTask.js";
import { format } from "date-fns";
import { saveTask } from "./index.js";
import { tasksList } from "./retrieveLocalData.js";

const createTaskHtmlElements = (newTask, projectContainer) => {
    if (!projectContainer) return;

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
    const formattedDate = format(newTask.dueDate, "do LLL yy");
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

    // exporting data to use it in other functions
    const task = {
        cardContainer,
        googleIcon,
        settingsContainer,
        selectOption,
        option1,
        option2,
    };
    checkTask(checkbox);
    chooseOption(task);
    removeTask(task);
    editTask(task);
    selectOption.remove();
};
const checkTask = (checkbox) => {
    checkbox.addEventListener("click", (e) => {
        const taskCard = e.target.parentElement.parentElement;
        const taskTitle = e.target.parentElement.parentElement.children[1].children[0];
        const taskDetails = e.target.parentElement.parentElement.children[1].children[1];
        const taskDueDate = e.target.parentElement.parentElement.children[2];

        const addCheckedEffect = (boolean, txtDecor) => {
            taskTitle.style.textDecoration = txtDecor;
            taskDetails.style.textDecoration = txtDecor;
            taskDueDate.style.textDecoration = txtDecor;

            tasksList.forEach((task) => {
                if (task.title === taskTitle.textContent) {
                    task.isChecked = boolean;
                    priorityEffect(taskCard, task.priority);
                }
            });
            saveTask();
        };
        if (checkbox.checked === true) {
            addCheckedEffect(true, "line-through");
            taskCard.style.backgroundColor = "#57575775";
        } else {
            addCheckedEffect(false, "none");
        }
    });
};
const chooseOption = (task) => {
    task.googleIcon.addEventListener("click", () => {
        // hide all other select containers
        const selectContainers = document.querySelectorAll("#select");
        selectContainers.forEach(selectContainer => {
            selectContainer.classList.add("show");
            task.selectOption.style.opacity = "1";
        });
        // show/append the select container
        task.selectOption.classList.toggle("show");
        task.settingsContainer.prepend(task.selectOption);

        // disable edit option on checked tasks
        const targetedTitle = task.cardContainer.children[1].children[0];
        if (targetedTitle.style.textDecoration === "line-through") {
            task.option1.disabled = true;
        } else {
            task.option1.disabled = false;
        }

        // auto hide the container 
        setTimeout(() => {
            task.selectOption.style.opacity = "0";
            task.selectOption.classList.add("show");
        }, 2000);
    });
};
const removeTask = (task) => {
    task.option2.addEventListener("click", (e) => {
        const targetedTitle =
            e.target.parentElement.parentElement.parentElement.childNodes[1]
                .childNodes[0];
        for (const taskList of tasksList) {
            if (taskList.title === targetedTitle.textContent) {
                const index = tasksList.indexOf(taskList);
                tasksList.splice(index, 1);
                saveTask();
                task.cardContainer.remove();
                task.selectOption.remove();
            }
        }
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
