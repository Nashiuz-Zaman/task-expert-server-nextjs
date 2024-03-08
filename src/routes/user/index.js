// imports
import express from 'express';

// controllers
import createUser from './../../api/user/controllers/createUser.js';
import checkUser from './../../api/user/controllers/checkUser.js';
import updateUser from './../../api/user/controllers/updateUser.js';
import deleteUser from '../../api/user/controllers/deleteUser.js';

// middlewares
import verifyToken from './../../middlewares/verifyToken.js';

// create router
const userRouter = express.Router();

// routes
userRouter.post('/users', createUser);
userRouter.post('/users/checkExistence', checkUser);
userRouter.patch('/users/:email', verifyToken, updateUser);
userRouter.delete('/users/:email', verifyToken, deleteUser);

export default userRouter;
