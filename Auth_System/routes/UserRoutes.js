import * as UserController from "../controller/UserController.js";
import express from 'express';


const userRoutes = express.Router();

userRoutes.post('/new', UserController.register)
userRoutes.post('/login', UserController.login)

export default userRoutes;