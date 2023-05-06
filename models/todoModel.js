const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  todoContent: {
    type: String,
    required: true,
  },
});

const todoModel = mongoose.model("todoModel", todoSchema);
module.exports = todoModel;
