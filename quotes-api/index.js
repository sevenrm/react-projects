const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const quoteJSONArray = require("./quotesSource.json");
const port = 3000;

require("dotenv").config();

console.log(process.env.DB_CONNECTION_URL);

mongoose
  .connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(cors());

const quotesRoute = require("./routes/quotes");
app.use(bodyParser.json());
app.use("/quotes", quotesRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
