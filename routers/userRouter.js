const express = require("express");
const userRouter = express.Router();

const {signup, login} = require("../controller/userController");

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signup);

module.exports = userRouter;