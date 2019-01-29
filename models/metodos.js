const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MetodosSchema = new Schema({
  clave: { type: String, required:true, unique:true }, //Este es el id que pusiste en el excel, lo pongo como "clave" para que no se confunda con el id que genera automáticamente mongo, el unique:true evita que se genere contenido duplicado
  nombremetodo: { type: String, required: true },

    // Lo de abajo es para popular:
    signatariopopulado: [{
        type: Schema.Types.ObjectId,
        ref: "Signatarios"
    }],
    equipo:[{
        type: Schema.Types.ObjectId,
        ref: "Equipos"
    }]
})


const Metodos = mongoose.model("Metodos", MetodosSchema);

module.exports = Metodos;
