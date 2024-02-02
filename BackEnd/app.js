const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes/index");

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", routes);

module.exports = app;