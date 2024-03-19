"use strict";

const conn = require("./connection");
const response = require("./res");

exports.index = (req, res) => {
  response.ok("anjay", res);
};

exports.all = (req, res) => {
  conn.query("SELECT * FROM mahasiswa", (err, rows, filed) => {
    if (err) {
      console.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.forId = (req, res) => {
  const id = req.params.id;
  conn.query(`SELECT * FROM mahasiswa WHERE id = ${id}`, (err, rows, filed) => {
    if (err) {
      console.log(err);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.notFound = (req, res) => {
  response.err("Not Found", res);
};
