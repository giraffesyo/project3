const db = require("../models");
//const axios = require("axios");

module.exports = {
//   findAllGoogle: function(req, res) {
//     const{query:params}=req;
//     console.log(params,"este es params en controller")
//     axios
//       .get("https://www.googleapis.com/books/v1/volumes", {
//         params
//       })
//       .then(results =>
//         results.data.items.filter(
//           result =>
//             result.volumeInfo.title &&
//             result.volumeInfo.infoLink &&
//             result.volumeInfo.authors &&
//             result.volumeInfo.description &&
//             result.volumeInfo.imageLinks 
//         )
//       )
//       .then(googleb => res.json(googleb))
//       .catch(err => res.status(422).json(err));
//   },
  findAll: function(req, res) { //Métodos
    db.Metodos
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Signatarios
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllSignatarios: function(req, res) {
    db.Signatarios
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   findOneSignatario:function(req, res) {
//     db.Signatarios
//       .findById(req.params.nombre)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },



//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};
