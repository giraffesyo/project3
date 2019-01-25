const db = require("../models")

module.exports = {
  create: function(req, res) {
    db.Proyectos.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findById: function(req, res) {
    db.Proyectos.findById(req.params.id)
      .populate("ordenes")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
