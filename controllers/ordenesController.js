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
  findAvailability: (req, res) => {
    const startDate = new Date(req.query.start)
    const endDate = new Date(req.query.end)
    db.Ordenes.aggregate([
      {
        $match: {
          start: {
            $gte: startDate,
            $lt: endDate
          }
        }
      },
      {
        $unwind: {
          path: "$signatario"
        }
      },
      {
        $project: {
          _id: false,
          signatario: true
        }
      },
      {
        $group: {
          _id: "$signatario"
        }
      }
    ])
      .then(dbModel => {
        const unavailablePeople = dbModel.map(({ _id }) => _id)
        res.json(unavailablePeople)
      })
      .catch(err => res.status(422).json(err))
  },
  //DULCINEA AGREGÓ:
  findAllOrdenes: function(req, res) {
    db.Ordenes.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}

// db.getCollection('ordenes').aggregate([
//   {
//       $match:
//       {'start':
//           {
//               $gte: ISODate("2019-02-10"),
//               $lt: ISODate("2019-02-12")
//           },
//       },
//   },
//   {
//       $unwind: {
//           path: '$signatario'
//       }
//   },
//   {
//       $project: {
//           _id: false,
//           signatario: true
//       }
//   },
//   {
//       $group: {

//               _id: "$signatario"
//           }
//       }

//       ])
