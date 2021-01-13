const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const postRoutes = require("./routes/post");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost/instagram", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use("/posts", postRoutes);

const POST = process.env.PORT || 5000;

app.listen(POST, () => console.log(`Example app listening on POST ${POST}!`));
