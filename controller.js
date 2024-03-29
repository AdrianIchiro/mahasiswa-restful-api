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
      console.log(rows);
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

exports.postData = (req, res) => {
  const nama = req.body.nama;
  const nim = req.body.nim;
  const prodi = req.body.prodi;

  conn.query(
    `INSERT INTO mahasiswa (nama, nim, prodi) VALUES ('${nama}', '${nim}', '${prodi}')`,
    (err, rows, filed) => {
      if (err) {
        console.log(err);
      } else {
        response.ok("insert data complete", res);
      }
    }
  );
};

exports.updateData = (req, res) => {
  const id = req.body.id;
  const nama = req.body.nama;
  const nim = req.body.nim;
  const prodi = req.body.prodi;
  conn.query(
    `UPDATE mahasiswa SET nama='${nama}', nim='${nim}', prodi='${prodi}' WHERE id = ${id}`,
    (err, rows, filed) => {
      if (err) {
        console.log(err);
      } else {
        response.ok("update complete", res);
      }
    }
  );
};

exports.deleteData = (req, res) => {
  const id = req.body.id;
  conn.query(`DELETE FROM mahasiswa WHERE id=${id}`, (err, rows, filed) => {
    if (err) {
      console.log(err);
    } else {
      response.ok("delete complete", res);
    }
  });
};

exports.allData = (req, res) => {
  conn.query(
    `SELECT mahasiswa.nama, mahasiswa.nim, mahasiswa.prodi, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN mahasiswa JOIN matakuliah WHERE krs.id = mahasiswa.id AND krs.id_matkul = matakuliah.id_matkul;`,
    (err, rows, filed) => {
      if (err) {
        console.log(err);
      } else {
        response.nested(rows, res);
      }
    }
  );
};
