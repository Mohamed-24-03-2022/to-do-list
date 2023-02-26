/* eslint-disable linebreak-style */
export default class TodoGenerator {
  constructor(title, details, dueDate, priority, project) {
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.isChecked = false;
  }
}
