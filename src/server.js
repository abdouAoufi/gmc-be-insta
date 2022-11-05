// const express = require("express"); default on nodeJS
import express from "express";
import {
 PORT_NUMBER
} from "./utils/utils.js";

const app = express();

app.use(express.json()); // important


app.listen(PORT_NUMBER, () => {
 console.log("SERVER IS RUNNING AT ", PORT_NUMBER);
})