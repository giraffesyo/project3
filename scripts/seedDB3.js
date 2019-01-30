const mongoose = require("mongoose")
const db = require("../models")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/labdb")




const ordenesSeed = [
  {
    title: "814-FF-18-1",
    proyecto: "444444444",
    clave: "814-FF-18-1",
    rama: "FF",
    tipodeestudio: "206",
    start: "Tue Aug 07 2018",
    end: "Tue Aug 07 2018",
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
    clave: "814-FF-18-2",
    rama: "FF",
    tipodeestudio: "206",
    start: "Tue Aug 07 2018",
    end: "Tue Aug 07 2018",
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
    clave: "814-AR-18-1",
    rama: "AR",
    tipodeestudio: "206",
    start: "Wed Aug 08 2018",
    end: "Wed Aug 08 2018",
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
    color:"#984362"
  }
]

const proyectSeed = [
  {
    title: "814",
    clave: "814",
    nombreempresa: "Asofarma de México, S.A de C.V",
    direccion:
      "Calz Mexico Xochimilco 43, Col. San Lorenzo Huipulco, Tlalpan, C.P 14370",
    start: "Tue Aug 07 2018",
    end: "Wed Aug 08 2018",
    preciototal: "8000",
    cantidad: "4",
    ordenes: [
      {
        clave: "814-FF-18-1",
        rama: "FF",
        tipodeestudio: "206",
        start: "Tue Aug 07 2018",
        end: "Tue Aug 07 2018",
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
      },
      {
        clave: "814-FF-18-3",
        rama: "FF",
        tipodeestudio: "206",
        start: "Tue Aug 07 2018",
        end: "Tue Aug 07 2018",
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
        preciosubtotal: "2000"
      },
      {
        clave: "814-AR-18-1",
        rama: "AR",
        tipodeestudio: "206",
        start: "Wed Aug 08 2018",
        end: "Wed Aug 08 2018",
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
        preciosubtotal: "2000"
      }
    ]
  },
  {
    title:"830",
    clave: "830",
    nombreempresa: "Hospital General Balbuena S.S de la CDMX",
    direccion:
      "Calz de Cecilio Robelo y Sur 103, Col. Aeronautica Militar, Venustiano Carranza, C.P 15970",
    start: "Mon Aug 13 2018",
    end: "Tue Aug 14 2018",
    preciototal: "8000",
    cantidad: "2",
    ordenes: [
      {
        clave: "830-AR-18-1",
        rama: "AR",
        tipodeestudio: "206",
        inicio: "Mon Aug 13 2018",
        fin: "Mon Aug 13 2018",
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
        signatario: ["JMGA"],
        equipo: ["Equipo3", "Equipo4"],
        status: "Payed",
        preciosubtotal: "5000"
      },
      {
        clave: "830-FF-18-1",
        rama: "FF",
        tipodeestudio: "206",
        inicio: "Tue Aug 14 2018",
        fin: "Tue Aug 14 2018",
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
        signatario: ["JMGA"],
        equipo: ["Equipo3", "Equipo4"],
        status: "Payed",
        preciosubtotal: "2000"
      }
    ]
  },
  {
    clave: "831",
    nombreempresa: "Asofarma de México, S.A de C.V",
    direccion:
      "Calz Mexico Xochimilco 43, Col. San Lorenzo Huipulco, Tlalpan, C.P 14370",
    inicio: "Tue Aug 07 2018",
    fin: "Wed Aug 08 2018",
    preciototal: "8000",
    cantidad: "4",
    ordenes: [
      {
        clave: "831-FF-18-1",
        rama: "FF",
        tipodeestudio: "206",
        start: "Tue Aug 07 2018",
        end: "Tue Aug 07 2018",
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
      },
      {
        clave: "831-AR-18-1",
        rama: "AR",
        tipodeestudio: "206",
        start: "Tue Aug 07 2018",
        end: "Tue Aug 07 2018",
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
        preciosubtotal: "2000"
      },
      {
        clave: "831-FF-18-4",
        rama: "FF",
        tipodeestudio: "206",
        start: "Wed Aug 08 2018",
        end: "Wed Aug 08 2018",
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
        preciosubtotal: "2000"
      }
    ]
  },
  {
    clave: "850",
    nombreempresa: "Hospital General Balbuena S.S de la CDMX",
    direccion:
      "Calz de Cecilio Robelo y Sur 103, Col. Aeronautica Militar, Venustiano Carranza, C.P 15970",
    inicio: "Mon Aug 13 2018",
    fin: "Tue Aug 14 2018",
    preciototal: "8000",
    cantidad: "2",
    ordenes: [
      {
        clave: "850-FF-18-1",
        rama: "FF",
        tipodeestudio: "206",
        start: "Mon Aug 13 2018",
        end: "Mon Aug 13 2018",
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
        signatario: ["JMGA"],
        equipo: ["Equipo3", "Equipo4"],
        status: "Payed",
        preciosubtotal: "5000"
      },
      {
        clave: "850-AR-18-2",
        rama: "AR",
        tipodeestudio: "206",
        start: "Tue Aug 14 2018",
        end: "Tue Aug 14 2018",
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
        signatario: ["JMGA"],
        equipo: ["Equipo3", "Equipo4"],
        status: "Payed",
        preciosubtotal: "2000"
      }
    ]
  }
]

// db.Proyectos.remove({})
db.Ordenes.remove({})
  // .then(() => db.Proyectos.collection.insertMany(proyectSeed))
  .then(() => db.Ordenes.collection.insertMany(ordenesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
