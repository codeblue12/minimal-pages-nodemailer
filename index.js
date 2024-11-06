const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { neonoutshine } = require("./controllers/neonoutshine");
const { manhattanneons } = require("./controllers/manhattanneons");
const { westninthvintage } = require("./controllers/westninthvintage");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("running");
});

app.post("/manhattan/send-email", manhattanneons);
app.post("/westninthvintage/send-email", westninthvintage);
app.post("/neonoutshine/send-email", neonoutshine);


const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});
