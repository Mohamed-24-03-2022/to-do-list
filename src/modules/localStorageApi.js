/* eslint-disable linebreak-style */
import tasksList from './tasksList';

const saveTask = () => localStorage.setItem('tasks', JSON.stringify(tasksList));
const retrieveTask = () => JSON.parse(localStorage.getItem('tasks'));

export { saveTask, retrieveTask };
