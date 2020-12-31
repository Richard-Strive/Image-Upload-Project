const express = require("express");
const path = require("path");
const ejs = require("ejs");
const multer = require("multer");

const app = express();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`The SERVER IT'S RUNNING AT PORT ${port}`);
});
