const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running 127.0.0.1:3000");
});
