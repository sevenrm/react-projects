const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
// dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use(express.json());
app.use(cors());

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
