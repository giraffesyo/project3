const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.Tipodeestudio.find(
      { nombrerama: req.body.data.nombrerama },
      req.body.data
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
