const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  todoContent: {
    type: String,
    required: true,
  },
  status:{
    type: Boolean,
    required: true,
    default: false
  }
});

const todoModel = mongoose.model("todoModel", todoSchema);
module.exports = todoModel;
