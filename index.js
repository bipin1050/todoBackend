const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");
const cookieparser = require("cookie-parser");

app.use(
  cors({
    origin: "https://to-do-roek.onrender.com",
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieparser());

const db_link =
  "mongodb+srv://admin:qh8KBK4rQpx0sT2R@cluster0.xbwo5lv.mongodb.net/";
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
const todoRouter = require("./routers/todoRouter");
//   const todoRouter = require("")

var htmlpath = path.join(__dirname, "public");
app.use(express.static(htmlpath));

app.use("/user", userRouter);
app.use("/todo", todoRouter);
