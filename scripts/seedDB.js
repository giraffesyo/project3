const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/labdb")
const proyectSeed = [
  {
    clave: "1",
    nombreempresa: "Salud Digna para Todos IAP (Miguel Hidalgo)",
    direccion:
      "Calz Mexico Xochimilco 43, Col. San Lorenzo Huipulco, Tlalpan, C.P 14370",
    inicio: "Wed Jan 09 2019",
    fin: "Sat Jan 12 2019",
    preciototal: "8000",
    cantidad: "3",
    ordenes: {
      clave: "1-FF-19-1",
      rama: "FF",
      tipodeestudio: "206",
      start: "Wed Jan 09 2019",
      end: "Wed Jan 09 2019",
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
      preciosubtotal: "5000"
    }
  }
]
const ordenSeed = [
  {
    clave: "2-AR-19-1",
    rama: "AR",
    tipodeestudio: "400",
    start: "Fri Jan 11 2019",
    end: "Fri Jan 11 2019",
    metodos: [
      "Estudio de aguas residuales con descarga a drenaje de red municipal"
    ],
    signatario: ["AMH", "RLJM"],
    equipo: ["Equipo3", "Equipo4"],
    status: "Payed",
    preciosubtotal: "8000"
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
