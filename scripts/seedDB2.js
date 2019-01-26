const mongoose = require("mongoose")
const db = require("../models")

// This file empties the collection and inserts

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/labdb")

const ramasSeed = [
  {
    claverama: "1r",
    nombrerama: "Aguas Residuales",
    tipodeestudio: ["01", "02", "03"]
  }
]

const tiposdeestudioSeed = [
  {
    clave: "200",
    nombretipodeestudio:
      "Estudio Isocinético de partículas. NOM-043-SEMARNAT-1993",
    descripcion: "Estudio isocinético de partículas",
    nombrerama: "Fuentes Fijas",
    metodos: ["uno"]
  },
  {
    clave: "201",
    nombretipodeestudio: "NOM-043-SEMARNAT-1993",
    descripcion:
      "Estudio isocinético de partículas y Voc's por cromatografía de gases",
    nombrerama: "Fuentes Fijas",
    metodos: ["EPA MÉTODO 18"]
  },
  {
    clave: "202",
    nombretipodeestudio: "NOM-043-SEMARNAT-1993",
    descripcion:
      "Estudio isocinético de partículas y Voc's por ionización de flama",
    nombrerama: "Fuentes Fijas",
    metodos: ["EPA MÉTODO 25-A"]
  },
  {
    clave: "01",
    nombretipodeestudio: "primero",
    descripcion: "primero descripcion",
    nombrerama: "Aguas Residuales",
    metodos: ["EPA MÉTODO 22"]
  },
  {
    clave: "02",
    nombretipodeestudio: "segundo",
    descripcion: "segundo descripcion",
    nombrerama: "Aguas Residuales",
    metodos: ["EPA MÉTODO 44"]
  },
  {
    clave: "03",
    nombretipodeestudio: "tercero",
    descripcion: "tercero descripcion",
    nombrerama: "Aguas Residuales",
    metodos: ["EPA MÉTODO 55"]
  }
]

const metodosSeed = [
  {
    clave: "uno",
    nombremetodo: "uno",
    signatario: ["Juan Perez", "Raul Juan"],
    equipo: ["a"]
  },
  {
    clave: "EPA MÉTODO 18",
    nombremetodo: "EPA MÉTODO 18",
    signatario: ["Rubi"],
    equipo: ["b"]
  },
  {
    clave: "EPA MÉTODO 25-A",
    nombremetodo: "EPA MÉTODO 25-A",
    signatario: ["Roberto", "Antonio"],
    equipo: ["a"]
  },
  {
    clave: "EPA MÉTODO 22",
    nombremetodo: "EPA MÉTODO 22",
    signatario: ["Luz"],
    equipo: ["a"]
  },
  {
    clave: "EPA MÉTODO 44",
    nombremetodo: "EPA MÉTODO 44",
    signatario: ["Mario"],
    equipo: ["a"]
  },
  {
    clave: "EPA MÉTODO 55",
    nombremetodo: "EPA MÉTODO 55",
    signatario: ["Tana"],
    equipo: ["b"]
  }
]

const signatariosSeed = [
  {
    clave: "jp",
    nombresignatario: "Juan Perez",
    metodos: ["uno"],
    contrasena: "jp2"
  },
  {
    clave: "rj",
    nombresignatario: "Raul Juan",
    metodos: ["uno"],
    contrasena: "rj2"
  },
  {
    clave: "rb",
    nombresignatario: "Rubi",
    metodos: ["EPA MÉTODO 18"],
    contrasena: "rb2"
  },
  {
    clave: "rr",
    nombresignatario: "Roberto",
    metodos: ["EPA MÉTODO 25-A"],
    contrasena: "rby2"
  },
  {
    clave: "an",
    nombresignatario: "Antonio",
    metodos: ["uno"],
    contrasena: "an2"
  },
  {
    clave: "llv",
    nombresignatario: "Luz",
    metodos: ["EPA MÉTODO 22"],
    contrasena: "ll"
  },
  {
    clave: "mm",
    nombresignatario: "Mario",
    metodos: ["EPA MÉTODO 44"],
    contrasena: "mm7"
  },
  {
    clave: "tt",
    nombresignatario: "Tana",
    metodos: ["EPA MÉTODO 55"],
    contrasena: "tt7"
  }
]

const equipoSeed = [
  {
    clave: "1a",
    nombreequipo: "a",
    marca: "losfera",
    modelo: "55-b",
    serie: "55"
  },
  {
    clave: "1b",
    nombreequipo: "b",
    marca: "yuo",
    modelo: "56-b",
    serie: "56"
  }
]

db.Ramas.remove({})
  .then(() => db.Tipodeestudio.remove({}))
  .then(() => db.Metodos.remove({}))
  .then(() => db.Signatarios.remove({}))
  .then(() => db.Equipos.remove({}))
  .then(() => db.Ramas.collection.insertMany(ramasSeed))
  .then(() => db.Tipodeestudio.collection.insertMany(tiposdeestudioSeed))
  .then(() => db.Metodos.collection.insertMany(metodosSeed))
  .then(() => db.Signatarios.collection.insertMany(signatariosSeed))
  .then(() => db.Equipos.collection.insertMany(equipoSeed))

  .then(data => {
    console.log(data.result.n + " records inserted!")
    process.exit(0)
  })
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
