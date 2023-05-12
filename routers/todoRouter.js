const express = require("express");
const todoRouter = express.Router();

const { addtodo, viewtodo, donetodo, deltodo } = require("../controller/todoController");

todoRouter.route("/addtodo").post(addtodo);
todoRouter.route("/viewtodo").get(viewtodo);
todoRouter.route("/donetodo").post(donetodo);
todoRouter.route("/deltodo").post(deltodo);

module.exports = todoRouter;
