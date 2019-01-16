const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EquiposSchema = new Schema({
  clave: { type: String, required:true, unique:true }, //Este es el id que pusiste en el excel, lo pongo como "clave" para que no se confunda con el id que genera automáticamente mongo, el unique:true evita que se genere contenido duplicado
  nombreequipo: { type: String, required: true },
  marca: { type: String },
  modelo: { type: String },
  serie: { type: String },
})


const Equipos = mongoose.model("Equipos", EquiposSchema);

module.exports = Equipos;
