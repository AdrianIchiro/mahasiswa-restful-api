"user strict";

exports.ok = (value, res) => {
  var data = {
    status: 200,
    data: value,
  };

  res.json(data);
  res.end();
};
