import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
//import middleware function to authenticate token
import { authenticateToken } from '../middleware/auth.js';

const router = Router();

//routes that handle the login and password validation.
router.use('/auth', authRoutes);

// TODO: Add authentication to the API routes
//any routes that go through /api will require a valid token
//from the user in the authorization header. If authenticateToken is successfull, then
//apiRoutes will go through
router.use('/api', authenticateToken, apiRoutes)


export default router;
