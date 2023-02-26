/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */

import { saveTask } from './localStorageApi';
import TodoGenerator from './TodoGenerator';
import createTaskHtmlElements from './createTaskHtmlElements';
import tasksList from './tasksList';

const generateSampleData = () => {
  const sampleTask1 = new TodoGenerator('Eat', '', new Date(), 'low', 'work');
  const sampleTask2 = new TodoGenerator('Sleep', '', new Date(), 'low', 'work');
  const sampleTask3 = new TodoGenerator(
    'Gym',
    '',
    new Date(),
    'normal',
    'work',
  );
  const sampleTasks = [sampleTask1, sampleTask2, sampleTask3];
  const workProjectContainer = document.querySelector('.work-project');

  sampleTasks.forEach((sampleTask) => {
    tasksList.push(sampleTask);
    createTaskHtmlElements(sampleTask, workProjectContainer);
  });
  saveTask();
};

export default generateSampleData;
