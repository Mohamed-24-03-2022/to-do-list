

class todoGenerator {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isChecked = false;
    }
}

const newTask = new todoGenerator("eat", "eat my breakfast", "Today", "High");
console.log(newTask);

const mainContent = document.querySelector(".main-content");
const text = document.createElement("p");
// text.textContent = newTask.title
// mainContent.appendChild(text);