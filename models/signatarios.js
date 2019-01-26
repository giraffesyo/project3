const mongoose = require("mongoose")
const Schema = mongoose.Schema

//Le puse signatarios a la tabla de empleados, ya que aparece como signatarios en la tabla de ordenes
const SignatariosSchema = new Schema({
  clave: { type: String, required: true, unique: true }, //Este es el id que pusiste en el excel, lo pongo como "clave" para que no se confunda con el id que genera automáticamente mongo, el unique:true evita que se genere contenido duplicado
  nombresignatario: { type: String, required: true },
  metodos: { type: [String] },
  contrasena: { type: String }
})

const Signatarios = mongoose.model("Signatarios", SignatariosSchema)

module.exports = Signatarios
