const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProyectosSchema = new Schema({
  title: { type: Number, unique: true }, //Este es el id que pusiste en el excel, lo pongo como "clave" para que no se confunda con el id que genera automáticamente mongo, el unique:true evita que se genere contenido duplicado
  nombreempresa: { type: String, },
  direccion: { type: String },
  start: { type: Date, default: Date.now },
  end: { type: Date, default: Date.now },
  preciototal: { type: Number },
  cantidad: { type: Number }, //Le puse precio total, para que en cada orden haya precio subtotal (el total es la suma de los subtotales)
  color:{ type: String },

  // Lo de abajo es para popular:
  // `orden` is an object that stores a Orden mongo id
  // The ref property links the ObjectId to the Orden model
  // This allows us to populate the Proyecto with an associated orden
  ordenes: {
    type: Schema.Types.ObjectId,
    ref: "Ordenes"
  }
})

const Proyectos = mongoose.model("Proyectos", ProyectosSchema)

module.exports = Proyectos
