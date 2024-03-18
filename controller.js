"use strict";

const conn = require("./connection");
const response = require("./res");

exports.index = (req, res) => {
  response.ok("anjay", res);
};

exports.all = (req, res) => {
  response.all("anjaymabar", res);
};
