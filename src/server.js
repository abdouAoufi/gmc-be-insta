// const express = require("express"); default on nodeJS
import express from "express";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
import {
 PORT_NUMBER
} from "./utils/utils.js";

const app = express();

app.use(express.json()); // important


app.use(userRouter);


app.use(postRouter);

app.use("*", (req, res, next) => {
 return res.json({
  message: "Endpoint does not exist"
 })
})

app.listen(PORT_NUMBER, () => {
 console.log("SERVER IS RUNNING AT ", PORT_NUMBER);
})