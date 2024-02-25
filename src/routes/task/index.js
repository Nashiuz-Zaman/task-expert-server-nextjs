// imports
import express from 'express';

// controller
import getTasks from '../../api/task/controllers/getTasks.js';
import updateTask from './../../api/task/controllers/updateTask.js';
import deleteTask from './../../api/task/controllers/deleteTask.js';
import createTask from './../../api/task/controllers/createTask.js';
import editTask from './../../api/task/controllers/editTask.js';

// create router
const taskRouter = express.Router();

// routes
taskRouter.get('/tasks', getTasks);
taskRouter.post('/tasks', createTask);
taskRouter.patch('/tasks/update/:id', updateTask);
taskRouter.put('/tasks/edit/:id', editTask);
taskRouter.delete('/tasks/delete/:id', deleteTask);

export default taskRouter;
