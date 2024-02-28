// imports
import express from 'express';

// controller & middlewares
import verifyToken from '../../middlewares/verifyToken.js';
import addPinnedTask from '../../api/pinnedTask/controllers/addPinnedTask.js';
import getPinnedTasks from '../../api/pinnedTask/controllers/getPinnedTasks.js';
import removePinnedTask from '../../api/pinnedTask/controllers/removePinnedTask.js';

// create router
const pinnedTaskRouter = express.Router();

// routes
pinnedTaskRouter.get('/pinned-tasks', verifyToken, getPinnedTasks);
pinnedTaskRouter.post('/pinned-tasks', addPinnedTask);
pinnedTaskRouter.delete('/pinned-tasks/:id', removePinnedTask);

export default pinnedTaskRouter;
