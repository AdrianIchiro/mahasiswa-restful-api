"use strict";

const conn = require("./connection");
const response = require("./res");

exports.index = (req, res) => {
  response.ok("anjay", res);
};
