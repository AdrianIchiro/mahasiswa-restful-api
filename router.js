"use strict";
const routerDefault = (app) => {
  const controller = require("./controller");
  app.route("/", controller.index);
};

module.exports = routerDefault;
