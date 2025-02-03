import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token
  // extract the username and passwork from the incoming login request
  const { username, password } = req.body;
  //check to see if the user already exists
  const user = await User.findOne({
    where: { username: username },
  });
  //if user does not exist, fail
  if (!user) {
    return res.status(401).json({ message: "Authentication failed -user" });
  }
  //if user exists validate by comparing it to what is in database
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res
      .status(401)
      .json({ message: "Authentication failed - password" });
  }
  //if user is valdated send a token (secret key cannot be null or undefined)
  const secretKey = process.env.JWT_SECRET_KEY!;
  //create token with the username and sign it with secret key. Set a 1 hour exp time
  const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
  //send the token to the client in  the response
  //now when the user sends API requests, the can add token to the authorization header
  //see auth.ts for middelware that handles the authentification
  return res.json({ token });
};

const router = Router();

// POST /login - Login a user
router.post("/login", login);

export default router;
