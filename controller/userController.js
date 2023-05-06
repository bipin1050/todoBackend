const userModel = require("../models/userModel");
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

//signup
module.exports.signup = async function signUp(req, res) {
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


// Login
module.exports.login = async function loginUser(req, res) {
  try {
    let data = req.body;

    if (data.username) {
      let user = await userModel.findOne({ username: data.username });

      if (user) {
        const auth = await bcrypt.compare(data.password, user.password)
        if (auth) {
          let uid = user["_id"];
          let maxAge = 5*24*60*60;
          let token = jwt.sign({ payload: uid }, process.env.Secret_Key, {
            expiresIn: maxAge,
          });
          res.cookie("login", token, { httpOnly: true });
          return res.status(200).json({
            message:
              "User logged in succesfully",
            jwt: token,
            username: user.username
          });
        } else {
          return res.status(400).json({
            message: "Password doesn't matches",
          });
        }
      } else {
        return res.status(400).json({
          message: "User not found",
        });
      }
    } else {
      return res.status(400).json({
        message: "Empty field found",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: err,
    });
  }
};