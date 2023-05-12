const todoModel = require("../models/todoModel");
const userModel = require("../models/userModel");
const express = require("express");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// require("dotenv").config();
const secretKey = "theToriApp";

module.exports.addtodo = async function addtodo(req, res) {
  try {
    let dataObj = req.body;
    let todo = await todoModel.create(dataObj);
    if (todo) {
      return res.status(200).json({
        message: "item added successfully",
      });
    } else {
      res.status(400).json({
        message: "Error creating list",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.viewtodo = async function viewtodo(req, res) {
  try {
    let user = req.body.username;
    if (user) {
      const todoList = await todoModel.find({ username: user });
      if (todoList) {
        return res.status(200).json({
          todoList: todoList,
        });
      } else {
        return res.status(400).json({
          message: "No items in list",
        });
      }
    } else {
      return res.status(400).json({
        message: "User not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.donetodo = async function donetodo(req, res) {
  try {
    statusid = req.body.statusid;
    for (let i = 0; i < statusid.length; i++) {
      await todoModel.findByIdAndUpdate(
        statusid[i],
        { status: true },
        { new: true }
      );
    }
    res.status(200).json({
      message: "Task Marked Done",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports.deltodo = async function deltodo(req, res) {
  try {
    let delid = req.body.delid;
    for (let i = 0; i < delid.length; i++) {
      await todoModel.findByIdAndDelete(delid[i]);
    }
    res.status(200).json({
      message: "Selected Task Deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
