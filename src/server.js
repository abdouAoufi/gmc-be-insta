// const express = require("express"); default on nodeJS
import express from "express";
import {
 connectToDb
} from "./database/db.js";
import postRouter from "./router/post.js";
import userRouter from "./router/user.js";
import {
 PORT_NUMBER
} from "./utils/utils.js";


const app = express();

app.use(express.json()); // important


connectToDb().then(() => {
 console.log("Connected to database")
 app.listen(PORT_NUMBER, () => {
  console.log("SERVER IS RUNNING AT ", PORT_NUMBER);
 })
}).catch(() => console.log("FAILED TO CONNECT DB"))

app.use(userRouter);


app.use(postRouter);

app.use("*", (req, res, next) => {
 return res.json({
  message: "Endpoint does not exist"
 })
})
