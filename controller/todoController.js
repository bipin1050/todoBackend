const todoModel = require("../models/todoModel");
const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// require("dotenv").config();

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
