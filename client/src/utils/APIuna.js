import axios from "axios"

//Este archivo es similar al ajax que tenías antes en un .js del front
export default {
  // Gets all metodos saved in database
  getMetodos: function() {
    return axios.get("/api/metodos")
  },
  // Gets all signatarios de el metodo seleccionado
  postMetodosConSignatarios: function(idsignatario) {
    return axios.post("/api/metodos/signatario/" + idsignatario.metodos, {
      data: idsignatario
    })
  },
  //AQUI TINES QUE HACER OTRA DE GET CON LO ANTERIOR NO?
  getMetodosConSignatarios: function(idsignatario) {
    return axios.get("/api/metodos/signatario/" + idsignatario.metodos)
  },

  //SI FUNCIONAAA
  // Saves a new signatario to the database
  // saveSignatarioNuevo: function(signatarioData) {
  //   return axios.post("/api/signatarios", signatarioData);
  // },
  //Get all signatarios
  getSignatarios: function() {
    return axios.get("/api/signatarios")
  },
  // Get one signatario by nombre
  getSignatarioSeleccionado: function(id) {
    return axios.get("/api/signatarios/" + id)
  },
  // Deletes un método de un signatario
  deleteBook: function(metodo) {
    return axios.delete("/api/signatarios/" + metodo)
  }
}
