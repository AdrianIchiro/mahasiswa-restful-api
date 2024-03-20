"use strict";
module.exports = function (app) {
  const MyJson = require("./controller");
  app.route("/").get(MyJson.index);
  app.route("/tampil").get(MyJson.all);
  app.route("/tampil/:id").get(MyJson.forId);
  app.route("/insert").post(MyJson.postData);
  app.route("/update").put(MyJson.updateData);
  app.route("*").get(MyJson.notFound);
};
