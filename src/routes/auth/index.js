// imports
import express from 'express';
import emailLogin from '../../api/auth/controllers/emailLogin.js';
import googleLogin from '../../api/auth/controllers/googleLogin.js';
import initialAuthValidation from '../../api/auth/controllers/initialAuthValidation.js';
import verifyToken from './../../middlewares/verifyToken.js';

// create router
const authRouter = express.Router();

// routes
authRouter.get('/validate', verifyToken, initialAuthValidation);
authRouter.post('/login', emailLogin);
authRouter.post('/google-login', googleLogin);

export default authRouter;
