/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */

const retrieveCheckedEffect = (storedTask) => {
  if (storedTask.isChecked === true) {
    const tasksCards = document.querySelectorAll('.card-item');
    for (let i = 0; i < tasksCards.length; i++) {
      const checkBox = tasksCards[i].children[0].children[0];
      const taskTitle = tasksCards[i].children[1].children[0];
      const taskDetails = tasksCards[i].children[1].children[1];
      const taskDueDate = tasksCards[i].children[2];

      if (storedTask.title === taskTitle.textContent) {
        checkBox.checked = true;
        tasksCards[i].style.backgroundColor = '#57575775';
        taskTitle.style.textDecoration = 'line-through';
        taskDetails.style.textDecoration = 'line-through';
        taskDueDate.style.textDecoration = 'line-through';
      }
    }
  }
};

export default retrieveCheckedEffect;
