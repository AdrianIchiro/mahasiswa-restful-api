const mysql = require("mysql");
const response = require("../res");
const conn = require("../connection");
const jwt = require("jsonwebtoken");
const ip = require("ip");
const morgan = require("morgan");
const md5 = require("md5");

exports.registrasi = function (req, res) {
  let post = {
    username: req.body.username,
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    tanggal_daftar: new Date(),
  };

  let query = "SELECT email FROM ?? WHERE ?? = ?";
  let table = ["user", "email", post.email];
  query = mysql.format(query, table);

  conn.query(query, (err, rows, filed) => {
    if (err) {
      console.log(err);
    } else {
      if (rows.length == 0) {
        let query = "INSERT INTO ?? SET ?";
        let table = ["user", post];
        query = mysql.format(query, table);
        conn.query(query, (err, rows, filed) => {
          if (err) {
            console.log(err);
          } else {
            response.ok("user success register", res);
          }
        });
      } else {
        response.ok("email already exits", res);
      }
    }
  });
};
