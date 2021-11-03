const express = require("express");
const bodyParser = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
