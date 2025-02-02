import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
//use environment variables
import dotenv from 'dotenv';

dotenv.config(); //load environment variables

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  //  When a client sends a login request, it must send bearer toke in authorization
  //  header (token is generated in auth-routes)
  // Authorization: Bearer <token>
  // Retrieve 'Authorization' value of header, remove the string 'Bearer'
  // 
  const authHeader = req.header('Authorization');
  // Extract token from 'Bearer <token>' and trim spaces
  const token = authHeader?.replace('Bearer', '').trim(); 
  
  
  //Check if token exists
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded as JwtPayload; //attach user info to the request
    next(); //proceed to next middleware
  } catch (err) {
    return res.status(403).json({message: 'Invalid token.'})
  }
};
