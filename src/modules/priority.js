/* eslint-disable no-useless-return */
/* eslint-disable consistent-return */
/* eslint-disable no-else-return */
/* eslint-disable no-param-reassign */
const priorityEffect = (cardContainer, priority) => {
  if (priority === 'low') {
    cardContainer.style.backgroundColor = 'inherit';
  } else if (priority === 'normal') {
    cardContainer.style.backgroundColor = '#08ff0061';
  } else if (priority === 'high') {
    cardContainer.style.backgroundColor = '#ff000091';
  }
};
const priorityCheck = () => {
  const lowPriority = document.querySelector('#low');
  const normalPriority = document.querySelector('#normal');
  const highPriority = document.querySelector('#high');
  if (lowPriority.checked === true) {
    return 'low';
  } else if (normalPriority.checked === true) {
    return 'normal';
  } else if (highPriority.checked === true) {
    return 'high';
  } else if (!lowPriority && !normalPriority && !highPriority) {
    return;
  }
};

export { priorityEffect, priorityCheck };
