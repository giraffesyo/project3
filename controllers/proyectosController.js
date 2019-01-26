const db = require("../models")

module.exports = {
  create: function(req, res) {
    db.Proyectos.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  //DULCINEA AGREGÓ:
  findAllProyectos: function(req, res) { 
    db.Proyectos
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
}
