/* eslint-disable linebreak-style */
/* eslint-disable import/no-mutable-exports */

const storedContainerArray = [];
const storedBtnArray = [];

const saveProjectContainerClass = () => localStorage.setItem(
  'ProjectContainerClass',
  JSON.stringify(storedContainerArray),
);
const retrieveProjectContainerClass = () => JSON.parse(localStorage.getItem('ProjectContainerClass'));

const saveProjectBtn = () => localStorage.setItem('projectBtn', JSON.stringify(storedBtnArray));
const retrieveProjectBtn = () => JSON.parse(localStorage.getItem('projectBtn'));

export {
  saveProjectContainerClass,
  saveProjectBtn,
  retrieveProjectContainerClass,
  retrieveProjectBtn,
  storedContainerArray,
  storedBtnArray,
};
