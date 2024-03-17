const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restful_api_mahasiswa",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("mysql is connected");
});

module.exports = conn;
