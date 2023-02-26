/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
//! Implement OOP Single Responsibility Principle
//* * Each entity must have one responsibility (must change for only a single reason)
// ? I will separate DOM from the logic (can be ran on console or using DOM)

import createTask from './modules/createTask';
import { changeProjects } from './modules/changeProjects';
import { createProject } from './modules/createProject';
import retrieveLocalData from './modules/retrieveLocalData';

createTask();
changeProjects();
retrieveLocalData();
createProject();
