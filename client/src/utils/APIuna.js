import axios from "axios";
//axios.defaults.baseURL= "http://localhost:3001";

//Este archivo es similar al ajax que tenías antes en un .js del front
export default {
  //Search for a google book
//   getGoogleBook: function(value){
//     //Aquí dices que el param es una q:title + el valor que pides en front. Así va la url con una q
//     return axios.get("/api/google", {params: {q: "title:" + value } }); 
//   },
  // Gets all metodos saved in database
  getMetodos: function() {
    return axios.get("/api/metodos");
  },
  // Get all signatarios
  getSignatarios:function() {
    return axios.get("/api/signatarios");
  },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
  // Saves a new signatario to the database
  saveSignatarioNuevo: function(signatarioData) {
    return axios.post("/api/signatarios", signatarioData);
  },
  // getSignatarioSeleccionado: function(nombre) {
  //   return axios.get("/api/signatarios/" + nombre);
  // },
};
