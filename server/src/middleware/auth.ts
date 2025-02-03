import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
//use environment variables
import dotenv from "dotenv";

interface JwtPayload {
  username: string;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): any => {
  // TODO: verify the token exists and add the user data to the request object
  //  When a client sends a login request, it must send bearer toke in authorization
  //  header (token is generated in auth-routes)
  // Authorization: Bearer <token>
  // Retrieve 'Authorization' value of header, remove the string 'Bearer'
  //
  dotenv.config(); //load environment variables

  const authHeader = req.header("Authorization");
  // Extract token from 'Bearer <token>' and trim spaces
  const token = authHeader?.replace("Bearer", "").trim();

  //Check if token exists
  if (!token) {
    console.log("no token");
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    console.log("JWT_SECRET_KEY:", process.env.JWT_SECRET_KEY);

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    console.log(`decoded: ${decoded}`);
    req.user = decoded as JwtPayload; //attach user info to the request
    console.log(`req.user = ${req.user}`);
    next(); //proceed to next middleware
  } catch (err) {
    console.log("catch error");
    return res.status(403).json({ message: "Invalid token." });
  }
};
