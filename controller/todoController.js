const todoModel = require("../models/todoModel");
const express = require("express");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// require("dotenv").config();

module.exports.addtodo = async function addtodo(req, res) {
  try {
    let dataObj = req.body;
    let user = await userModel.create(dataObj);
    if (user) {
      return res.status(200).json({
        message: "SignedUp signUp authController controller",
        data: user,
      });
    } else {
      res.status(400).json({
        message: "Error signUp authController controller",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
