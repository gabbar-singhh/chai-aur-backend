require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/twitter", (req, res) => {
  res.send("garadiya0");
});

app.get("/login", (req, res) => {
  res.send("<h1>pls login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai Aur Code</h2>");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
