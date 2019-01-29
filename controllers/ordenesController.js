const db = require("../models")

module.exports = {
  create: (req, res) => {
    const { proyecto, ...restOfBody } = req.body
    db.Ordenes.create(restOfBody)
      .then(dbModel =>
        db.Proyectos.findOneAndUpdate(
          { clave: parseInt(proyecto, 10) },
          { $push: { ordenes: dbModel._id } },
          { new: true }
        )
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => console.log(err) || res.status(422).json(err))
  },
  //DULCINEA AGREGÓ:
  findAllOrdenes: function(req, res) {
    db.Ordenes.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
