const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/labdb")




const ordenesSeed = [
  {
    title: "814-FF-18-1",
    clave: "814-FF-18-1",
    rama: "FF",
    tipodeestudio: "206",
    start: "Tue Jan 15 2019",
    end: "Tue Jan 15 2019",
    metodos: [
      "NMX-AA-009-1993, SCFI",
      "NMX-AA-010-SCFI-2001",
      "NMX-AA-035-1976",
      "NMX-AA-054-1978",
      "EPA METODO 3A-2008",
      "EPA METODO 6C-2008",
      "EPA METODO 7E-2008",
      "EPA METODO 10-2008"
    ],
    signatario: ["AYB", "JMGA"],
    equipo: ["Equipo1", "Equipo2"],
    status: "Payed",
    preciosubtotal: "5000",
    color:"#1e6438"
  },

  {
    title: "814-FF-18-2",
    clave: "814-FF-18-2",
    rama: "FF",
    tipodeestudio: "206",
    start: "Fri Jan 18 2019",
    end: "Fri Jan 18 2019",
    metodos: [
      "NMX-AA-009-1993, SCFI",
      "NMX-AA-010-SCFI-2001",
      "NMX-AA-035-1976",
      "NMX-AA-054-1978",
      "EPA METODO 3A-2008",
      "EPA METODO 6C-2008",
      "EPA METODO 7E-2008",
      "EPA METODO 10-2008"
    ],
    signatario: ["AYB"],
    equipo: ["Equipo1", "Equipo2"],
    status: "Payed",
    preciosubtotal: "2000",
    color:"#1e6438"
  },
  {
    title: "814-AR-18-1",
    clave: "814-AR-18-1",
    rama: "AR",
    tipodeestudio: "206",
    start: "Mon Jan 21 2019",
    end: "Mon Jann 21 2019",
    metodos: [
      "NMX-AA-009-1993, SCFI",
      "NMX-AA-010-SCFI-2001",
      "NMX-AA-035-1976",
      "NMX-AA-054-1978",
      "EPA METODO 3A-2008",
      "EPA METODO 6C-2008",
      "EPA METODO 7E-2008",
      "EPA METODO 10-2008"
    ],
    signatario: ["AYB"],
    equipo: ["Equipo1", "Equipo2"],
    status: "Payed",
    preciosubtotal: "8000",
    color:"#984362"
  }
]

const proyectSeed = [
  {
    title: "800",
    clave: "800",
    nombreempresa: "Asofarma de México, S.A de C.V",
    direccion:
      "Calz Mexico Xochimilco 43, Col. San Lorenzo Huipulco, Tlalpan, C.P 14370",
    start: "Tue Jan 15 2019",
    end: "Fri Jan 18 2019",
    preciototal: "7000",
    cantidad: "4",
    color:"#1e6438"
  },
  {
    title:"900",
    clave: "900",
    nombreempresa: "Hospital General Balbuena S.S de la CDMX",
    direccion:
      "Calz de Cecilio Robelo y Sur 103, Col. Aeronautica Militar, Venustiano Carranza, C.P 15970",
    start: "Mon Jan 21 2019",
    end: "Mon Jan 21 2019",
    preciototal: "8000",
    cantidad: "2",
    color:"#984362"
  },

  
]

db.Proyectos.remove({})
db.Ordenes.remove({})
  .then(() => db.Proyectos.collection.insertMany(proyectSeed))
  .then(() => db.Ordenes.collection.insertMany(ordenesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
