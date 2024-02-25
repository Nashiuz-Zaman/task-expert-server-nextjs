// imports
import express from 'express';
import createUser from './../../api/user/controllers/createUser.js';
import checkUser from './../../api/user/controllers/checkUser.js';

// create router
const userRouter = express.Router();

// routes
userRouter.post('/users', createUser);
userRouter.post('/users/checkExistence', checkUser);

export default userRouter;
