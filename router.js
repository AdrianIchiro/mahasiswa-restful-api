"use strict";
module.exports = function (app) {
  const MyJson = require("./controller");
  app.route("/").get(MyJson.all);
  app.route("/tampil/:id").get(MyJson.forId);
  app.route("/insert").post(MyJson.postData);
  app.route("/update").put(MyJson.updateData);
  app.route("/delete").delete(MyJson.deleteData);
  app.route("/all").get(MyJson.allData);
  app.route("*").get(MyJson.notFound);
};
