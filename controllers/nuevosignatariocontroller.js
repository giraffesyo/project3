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
  //Find All Métodos
  findAll: function(req, res) { //Métodos
    db.Metodos
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //Crea nuevo signatario y en métodos lo popula en sus métodos correspondientes
  createSignatarioEnMetodo:function(req, res) { 
    console.log("ESTE REQ PARAMS",req.params.id),
    console.log("elbody",req.body)
    db.Signatarios
      .create(req.body.data)
      .then(function(elSignatario) { 
                                                    
        return db.Metodos.updateMany(
          {_id: { $in: req.params.id.split(",")}}, 
          { $push:{signatariopopulado: elSignatario._id} }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //POPULATE
  findSignatarioEnMetodo:function(req, res) { 
    db.Metodos.findOne({ _id: req.params.id})
      .populate("signatario")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  updateOneSignatario:function(req, res) { 
    console.log("ESTE REQ PARAMS DE UPDATEONESIGNATARIO",req.params.id),
    console.log("elbody",req.body)
    console.log("elsig",req.body.data.id)
    db.Signatarios
      .findOneAndUpdate({ _id: req.body.data.id }, req.body.data)
      .then(function(elSignatario) {           
        return db.Metodos.updateMany(
          {_id: { $in: req.params.id.split(",")}}, 
          { $push:{signatariopopulado: elSignatario._id} }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // updateOneSignatario:function(req, res) { 
  //   console.log("ESTE REQ PARAMS DE UPDATEONESIGNATARIO",req.params.id),
  //   console.log("elbody",req.body)
  //   db.Signatarios
  //     .findOneAndUpdate({ _id: req.params.id }, req.body.data)
  //     .then(function(elSignatario) {           
  //       return db.Metodos.updateMany(
  //         {_id: { $in: req.body.data[0].metodos.split(",")}}, 
  //         { $push:{signatariopopulado: elSignatario._id} }, { new: true });
  //     })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


  //ESTA ES LA QUE USABAS ANTES QUE SIIIIIII FUNCIONA
  // create: function(req, res) {
  //   db.Signatarios
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findAllSignatarios: function(req, res) {
    db.Signatarios
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneSignatario:function(req, res) {
    db.Signatarios
      .find({_id: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
};
