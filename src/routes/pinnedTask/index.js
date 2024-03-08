// imports
import express from 'express';

// controller
import addPinnedTask from '../../api/pinnedTask/controllers/addPinnedTask.js';
import getPinnedTasks from '../../api/pinnedTask/controllers/getPinnedTasks.js';
import removePinnedTask from '../../api/pinnedTask/controllers/removePinnedTask.js';

// middlewares
import verifyToken from '../../middlewares/verifyToken.js';

// create router
const pinnedTaskRouter = express.Router();

// routes
pinnedTaskRouter.get('/pinned-tasks', verifyToken, getPinnedTasks);
pinnedTaskRouter.post('/pinned-tasks', verifyToken, addPinnedTask);
pinnedTaskRouter.delete('/pinned-tasks/:id', verifyToken, removePinnedTask);

export default pinnedTaskRouter;
