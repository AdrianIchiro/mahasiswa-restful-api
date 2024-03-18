"use strict";
module.exports = function (app) {
  const MyJson = require("./controller");
  app.route("/").get(MyJson.index);
};
