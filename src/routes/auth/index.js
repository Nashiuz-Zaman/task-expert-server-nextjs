// imports
import express from 'express';
import emailLoginAuthCheck from './../../api/auth/controllers/emailLoginAuthCheck.js';
import googleLoginAuthCheck from './../../api/auth/controllers/googleLoginAuthCheck.js';

// create router
const authRouter = express.Router();

// routes
authRouter.post('/login', emailLoginAuthCheck);
authRouter.post('/google-login', googleLoginAuthCheck);

export default authRouter;
