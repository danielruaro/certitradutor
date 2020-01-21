const express = require("express");

const api = express();

const tradutor = require("./tradutor");

api.listen(3000, function() {
  console.log("Listening on port 3000");
});

api.get("/:numero", (req, res) => {
  var { numero } = req.params;

  var result = tradutor(numero);

  res.json({ extenso: result }); //
});
