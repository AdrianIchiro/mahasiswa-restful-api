const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require("./router");
routes(app);

app.listen(3000, () => {
  console.log("Server is ready");
});
