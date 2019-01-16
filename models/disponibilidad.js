const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Supone que cada que le asignas una fecha a un empleado, hará una nueva fila en esta
//tabla con el nombre del signatario y la fecha.
//Así cuando se cumpla el plazo en que se ocupó un signatario, se borrará de la tabla
const DisponibilidadSchema = new Schema({
  signatario: { type: String },
  inicio: { type: Date, default: Date.now }, 
  fin: { type: Date, default: Date.now  }, 
  claveestudio: { type: String },
})

const Disponibilidad= mongoose.model("Disponibilidad", DisponibilidadSchema);

module.exports = Disponibilidad;