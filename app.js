const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");

app.use(cors());
app.use(bodyParser.json());

const db_link = "mongodb+srv://admin:qh8KBK4rQpx0sT2R@cluster0.xbwo5lv.mongodb.net/";
mongoose
  .connect(db_link, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });

  
  const userRouter = require("./routers/userRouter");
//   const todoRouter = require("")

  var htmlpath = path.join(__dirname, "public");
  app.use(express.static(htmlpath));

  app.use('/user', userRouter);
//   app.use("/todo", todoRouter)