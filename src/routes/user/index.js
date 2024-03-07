// imports
import express from 'express';

// controllers
import createUser from './../../api/user/controllers/createUser.js';
import checkUser from './../../api/user/controllers/checkUser.js';
import updateUser from './../../api/user/controllers/updateUser.js';
import deleteUser from '../../api/user/controllers/deleteUser.js';

// create router
const userRouter = express.Router();

// routes
userRouter.post('/users', createUser);
userRouter.post('/users/checkExistence', checkUser);
userRouter.patch('/users/:email', updateUser);
userRouter.delete('/users/:email', deleteUser);

export default userRouter;
