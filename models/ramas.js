const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RamasSchema = new Schema({
  claverama: { type: String, required: true }, //Este es el id que pusiste en el excel, lo pongo como "clave" para que no se confunda con el id que genera automáticamente mongo, el unique:true evita que se genere contenido duplicado
  nombrerama: { type: String, required: true },

  // Lo de abajo es para popular:
  tipodeestudio: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tipodeestudio"
    }
  ]
})

const Ramas = mongoose.model("Ramas", RamasSchema)

module.exports = Ramas
