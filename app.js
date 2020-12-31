const express = require("express");
const path = require("path");
const ejs = require("ejs");
const multer = require("multer");
require("dotenv").config();

const app = express();

const port = process.env.PORT;

const storage1 = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
/*1. utilizzare multer per salvare da salvare il file da qualche parte*/

const upload = multer({
  storage: storage1,
  limits: { fileSize: 100000000 },
}).single("immagini");
/*2. Creare la variabile dell'upload che interaggira' con lo storage1*/

app.set("view engine", "ejs");
/*EJS simple way of using schemi Javascript*/

app.use(express.static("/public"));
/* Codice per creare una cartella di nome public */

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render("index", { msg: err });
    } else {
      console.log(req.file);
      res.send("test");
    }
  });
});
/*Creare il route per il post*/

app.get("/", (req, res) => res.render("index"));

app.listen(port, () => {
  console.log(`The SERVER IT'S RUNNING AT PORT ${port}`);
});
