const express = require("express");
const userRouter = express.Router();

const {signup, login, verifytoken} = require("../controller/userController");

userRouter.route("/login").post(login);
userRouter.route("/signup").post(signup);
userRouter.route('/verifytoken').get(verifytoken);

module.exports = userRouter;