const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//ESTE ES EL ESTUDIO, pero le ponemos "ordenes" para no confundirnos
const OrdenesSchema = new Schema({
  clave: { type: String, required:true, unique:true }, //Este es el id que pusiste en el excel, lo pongo como "clave" para que no se confunda con el id que genera automáticamente mongo, el unique:true evita que se genere contenido duplicado
  rama: { type: String, required: true },
  tipodeestudio:{ type: Number, required: true },
  metodos:{ type: Number, required: true },
  signatario: { type: String, required: true }, 
  equipo: { type: String, required: true },
  inicio: { type: Date, default: Date.now },
  fin: { type: Date, default: Date.now },
  comentarios: { type: String },
  status: { type: String }, 
  preciosubtotal: { type: Number }, //Le puse precio total, para que en cada orden haya precio subtotal (el total es la suma de los subtotales)
});

const Ordenes = mongoose.model("Ordenes", OrdenesSchema);

module.exports = Ordenes;
