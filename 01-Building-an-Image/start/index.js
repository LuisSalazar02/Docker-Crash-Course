const axios = require("axios");
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  let image = await axios("https://picsum.photos/200/300");
  res.send(`<img src="${image.request.res.responseUrl}" />`);
});

app.listen(3333, () => {
  console.log("listening on port 3333!!!!!");
});
