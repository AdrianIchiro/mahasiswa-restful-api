"use strict";

exports.ok = (value, res) => {
  var data = {
    status: 200,
    data: value,
  };

  res.json(data);
};

exports.err = (value, res) => {
  var data = {
    status: 404,
    errors: value,
  };

  res.json(data);
};

exports.nested = (value, res) => {
  const hasil = value.reduce((accumalation, item) => {
    if (accumalation[item.nama]) {
      const grup = accumalation[item.nama];
      if (Array.isArray(grup.matakuliah)) {
        grup.matakuliah.push(item.matakuliah);
      } else {
        grup.matakuliah = [grup.matakuliah, item.matakuliah];
      }
    } else {
      accumalation[item.nama] = item;
    }
    return accumalation;
  }, {});

  var data = {
    status: 200,
    data: hasil,
  };

  res.json(data);
};
