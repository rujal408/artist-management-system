import { NextFunction, Request, Response } from "express";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { SECRET_KEY } from "../constants/secret";

class UserController {
  protected async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, role } = req.body;

      const existingUser = await User.findOne({ email: email });

      if (existingUser) {
        return res.status(401).json({ message: "User already exists !" });
      }

      bcrypt.hash(password, 10, async (_, hash) => {
        // Store hash in your password DB.
        const result = await User.create({
          email: email,
          name: name,
          password: hash,
          role
        });
        const token = jwt.sign(
          { email: result.email, id: result.id },
          SECRET_KEY
        );
        return res.status(201).json({ user: result, token });
      });
    } catch (err) {
      return res.status(401).json({ message: "" });
    }
  }
}

export default UserController;
