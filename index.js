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
const tasksList = [];

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

const createHtmlElements = (newTask) => {
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
    dueDate.textContent = newTask.dueDate;
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
    selectOption.remove();

    // append all containers into the task
    cardContainer.prepend(
        checkboxContainer,
        taskContainer,
        dueDateContainer,
        settingsContainer
    );

    // append the task to the main container
    mainContent.appendChild(cardContainer);

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
    // editTask(task);
};
const priorityEffect = (cardContainer, priority) => {
    if (priority === "low") {
        cardContainer.style.backgroundColor = "inherit";
    } else if (priority === "normal") {
        cardContainer.style.backgroundColor = "#00ff0069";
    } else if (priority === "high") {
        cardContainer.style.backgroundColor = "#ff000091";
    }
};
const priorityCheck = () => {
    const lowPriority = document.querySelector("#low");
    const normalPriority = document.querySelector("#normal");
    const highPriority = document.querySelector("#high");
    if (!lowPriority || !normalPriority || !highPriority) return;
    if (lowPriority.checked === true) {
        return "low";
    } else if (normalPriority.checked === true) {
        return "normal";
    } else if (highPriority.checked === true) {
        return "high";
    }
};
const createTask = (() => {
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
    });

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
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
        createHtmlElements(newTask);
        createTask.form.remove();
    });

    cancelBtn.addEventListener("click", (e) => {
        e.preventDefault();
        createTask.form.remove();
    });

    return { form };
})();
const chooseOption = (task) => {
    task.googleIcon.addEventListener("click", () => {
        task.selectOption.classList.toggle("show");
        task.settingsContainer.prepend(task.selectOption);
        editTask(task);
    });
};
const removeTask = (task) => {
    task.option2.addEventListener("click", () => {
        task.selectOption.remove();
        task.cardContainer.remove();
    });
};
const checkTask = (checkbox, removeOption) => {
    checkbox.addEventListener("click", () => {
        if (checkbox.checked === true) {
            removeOption.click();
        }
    });
};

const target = {};
const editTask = (task) => {
    const editOption = document.querySelector("option.edit");

    editOption.addEventListener("click", (e) => {
        task.selectOption.classList.toggle("show");
        createTask.form.style.visibility = "visible";
        mainContent.append(createTask.form);
        restartFormValue();
        if (!e.target.parentElement.parentElement.parentElement) return;
        target.container = e.target.parentElement.parentElement.parentElement;
        target.title =
            e.target.parentElement.parentElement.parentElement.children[1].children[0];
        target.details =
            e.target.parentElement.parentElement.parentElement.children[1].children[1];
        target.dueDate =
            e.target.parentElement.parentElement.parentElement.children[2].children[0];

        task.selectOption.remove();
        saveChange();
    });
};
const saveChange = () => {
    const titleInput = document.querySelector("#title");
    const detailsInput = document.querySelector("#details");
    const dueDateInput = document.querySelector("#due-date");
    const changeBtn = document.querySelector(".change");
    changeBtn.disabled = false;

    changeBtn.addEventListener("click", (btnEvt) => {
        btnEvt.stopPropagation();
        btnEvt.preventDefault();
        console.log(target);
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
                createTask.form.remove();
            }
        }
    }, { once: true });
};
const generateSampleData = (() => {
    const sampleTask1 = new todoGenerator("Eat", "", "", "low");
    const sampleTask2 = new todoGenerator("Sleep", "", "", "low");
    const sampleTask3 = new todoGenerator("Gym", "", "", "normal");
    const sampleTasks = [sampleTask1, sampleTask2, sampleTask3];
    for (const sampleTask of sampleTasks) {
        tasksList.push(sampleTask);
        createHtmlElements(sampleTask);
    }
})();
