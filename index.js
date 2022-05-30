const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  res.send("Hello World, from the dokku tutorial");
});

const port = process.env.PORT || 4000;
app.listen(port, console.log("Listening on", port));
