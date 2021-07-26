const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const apiRoutes = require("./src/modules/routes/routes.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", apiRoutes);

const url =
  "mongodb+srv://user:user@cluster0.kh5p8.mongodb.net/To-Do?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(8000, () => {
  console.log("Example app listening on port 8000!");
});
