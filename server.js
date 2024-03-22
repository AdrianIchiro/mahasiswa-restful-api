const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const morgan = require("morgan");

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

// routes CRUD
const routes = require("./router");
routes(app);

// router middleware
app.use("/auth", require("./middleware"));

app.listen(3000, () => {
  console.log("Server is ready");
});
