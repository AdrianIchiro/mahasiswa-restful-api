const mysql = require("mysql");
const response = require("../res");
const conn = require("../connection");
const jwt = require("jsonwebtoken");
const ip = require("ip");
const morgan = require("morgan");
const md5 = require("md5");
const config = require("../config/secret");

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

exports.login = function (req, res) {
  let post = {
    email: req.body.email,
    password: req.body.password,
  };

  let query = "SELECT * FROM ?? WHERE ??=? AND ??=?";
  let table = ["user", "email", post.email, "password", md5(post.password)];
  query = mysql.format(query, table);

  conn.query(query, (err, rows, filed) => {
    if (err) {
      console.log(err);
    } else {
      if (rows.length == 1) {
        let token = jwt.sign({ rows }, config.secret, {
          expiresIn: 1440,
        });
        let id_user = rows[0].id_user;
        console.log(id_user);
        let post_user = {
          id_user: id_user,
          access_token: token,
          ip_address: ip.address(),
        };

        let query = "INSERT INTO ?? SET ?";
        let table = ["akses_token", post_user];

        query = mysql.format(query, table);

        conn.query(query, (err, rows, filed) => {
          if (err) {
            console.log(err);
          } else {
            res.json({
              status: "Success",
              token_access: token,
              ip_address: post_user.ip_address,
              number_user: id_user,
            });
          }
        });
      } else {
        res.json({
          status: "failed",
          error: "email or password false",
        });
      }
    }
  });
};
