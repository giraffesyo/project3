const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/labdb")
// const ordenesSeed=[{
//   clave: "814-FF-18-1",
//   rama: "FF",
//   tipodeestudio: "206",
//   start: "Tue Aug 07 2018",
//   end: "Tue Aug 07 2018",
//   metodos: [
//     "NMX-AA-009-1993, SCFI",
//     "NMX-AA-010-SCFI-2001",
//     "NMX-AA-035-1976",
//     "NMX-AA-054-1978",
//     "EPA METODO 3A-2008",
//     "EPA METODO 6C-2008",
//     "EPA METODO 7E-2008",
//     "EPA METODO 10-2008"
//   ],
//   signatario: ["AYB", "JMGA"],
//   equipo: ["Equipo1", "Equipo2"],
//   status: "Payed",
//   preciosubtotal: "5000"
// },

// {
//   clave: "814-FF-18-3",
//   rama: "FF",
//   tipodeestudio: "206",
//   start: "Tue Aug 07 2018",
//   end: "Tue Aug 07 2018",
//   metodos: [
//     "NMX-AA-009-1993, SCFI",
//     "NMX-AA-010-SCFI-2001",
//     "NMX-AA-035-1976",
//     "NMX-AA-054-1978",
//     "EPA METODO 3A-2008",
//     "EPA METODO 6C-2008",
//     "EPA METODO 7E-2008",
//     "EPA METODO 10-2008"
//   ],
//   signatario: ["AYB"],
//   equipo: ["Equipo1", "Equipo2"],
//   status: "Payed",
//   preciosubtotal: "2000"
// },
// {
//   clave: "814-AR-18-1",
//   rama: "AR",
//   tipodeestudio: "206",
//   start: "Wed Aug 08 2018",
//   end: "Wed Aug 08 2018",
//   metodos: [
//     "NMX-AA-009-1993, SCFI",
//     "NMX-AA-010-SCFI-2001",
//     "NMX-AA-035-1976",
//     "NMX-AA-054-1978",
//     "EPA METODO 3A-2008",
//     "EPA METODO 6C-2008",
//     "EPA METODO 7E-2008",
//     "EPA METODO 10-2008"
//   ],
//   signatario: ["AYB"],
//   equipo: ["Equipo1", "Equipo2"],
//   status: "Payed",
//   preciosubtotal: "2000"
// }


// ]

const proyectSeed = [
  {
    title: "814",
    nombreempresa: "Asofarma de México, S.A de C.V",
    direccion:
      "Calz Mexico Xochimilco 43, Col. San Lorenzo Huipulco, Tlalpan, C.P 14370",
    start: "Tue Aug 07 2018",
    end: "Wed Aug 08 2018",
    preciototal: "8000",
    cantidad: "4",
  },
  {
    title: "415",
    nombreempresa: "Asofarma de México, S.A de C.V",
    direccion:
      "Calz Mexico Xochimilco 43, Col. San Lorenzo Huipulco, Tlalpan, C.P 14370",
    start: "Tue Aug 07 2018",
    end: "Wed Aug 10 2018",
    preciototal: "8000",
    cantidad: "4",
  },
  {
    title: "500",
    nombreempresa: "Asofarma de México, S.A de C.V",
    direccion:
      "Calz Mexico Xochimilco 43, Col. San Lorenzo Huipulco, Tlalpan, C.P 14370",
    start: "Tue Aug 07 2018",
    end: "Wed Aug 08 2018",
    preciototal: "8000",
    cantidad: "4",
  }
 
]



db.Proyectos.remove({})
  .then(() => db.Proyectos.collection.insertMany(proyectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
