import { tasksList } from "./index.js";
import { priorityEffect, priorityCheck } from "./priority.js";
import { restartFormValue } from "./createTaskHtmlElements.js";

const mainContent = document.querySelector(".main-content");

const keepFormValues = (targetTitle) => {
    const titleInput = document.querySelector("#title");
    const detailsInput = document.querySelector("#details");
    const dueDateInput = document.querySelector("#due-date");
    const radioBtn = {
        low: document.querySelector("#low"),
        normal: document.querySelector("#normal"),
        high: document.querySelector("#high"),
    };

    for (const task of tasksList) {
        if (targetTitle === task.title) {
            titleInput.value = task.title;
            detailsInput.value = task.details;
            dueDateInput.value = task.dueDate;
            if (task.priority === "low") {
                radioBtn.low.checked = true;
            } else if (task.priority === "normal") {
                radioBtn.normal.checked = true;
            } else {
                radioBtn.high.checked = true;
            }
        }
    }
};

const target = {};
const editTask = (task) => {
    const form = document.querySelector("#form");
    const editOption = document.querySelector("option.edit");
    const addBtn = document.querySelector(".add");

    editOption.addEventListener("click", (e) => {
        addBtn.disabled = true;
        task.selectOption.classList.toggle("show");
        form.style.visibility = "visible";
        mainContent.append(form);
        restartFormValue();

        if (!e.target.parentElement.parentElement.parentElement) return;
        target.container = e.target.parentElement.parentElement.parentElement;
        target.title = e.target.parentElement.parentElement.parentElement.children[1].children[0];
        target.details = e.target.parentElement.parentElement.parentElement.children[1].children[1];
        target.dueDate = e.target.parentElement.parentElement.parentElement.children[2].children[0];

        keepFormValues(target.title.textContent);

        task.selectOption.remove();
        saveChange();
    });
};
const saveChange = () => {
    const titleInput = document.querySelector("#title");
    const detailsInput = document.querySelector("#details");
    const dueDateInput = document.querySelector("#due-date");
    const changeBtn = document.querySelector(".change");
    const form = document.querySelector("#form");

    changeBtn.disabled = false;

    changeBtn.addEventListener("click", () => {
        // make the form validation work without submitting ti
        const checkStatus = form.checkValidity();
        form.reportValidity();
        if (!checkStatus) {
            return;
        }
        for (const taskList of tasksList) {
            if (!target.title) break;
            if (taskList.title === target.title.textContent) {
                taskList.title = titleInput.value;
                taskList.details = detailsInput.value;
                taskList.dueDate = dueDateInput.value;
                taskList.priority = priorityCheck();

                target.title.textContent = taskList.title;
                target.details.textContent = taskList.details;
                target.dueDate.textContent = taskList.dueDate;
                priorityEffect(target.container, taskList.priority);

                form.remove();
            }
        }
    });
};

export { editTask, saveChange };
