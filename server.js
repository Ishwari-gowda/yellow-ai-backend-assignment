const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("REQUEST HIT THIS SERVER FILE");
  res.send("THIS IS THE NEW SERVER RESPONSE");
});

app.listen(PORT, () => {
  console.log("SERVER.JS FILE IS RUNNING ON PORT 3000");
});