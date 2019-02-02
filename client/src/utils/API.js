import axios from "axios"

export default {
  saveOrden: estudioData => axios.post("/api/ordenes/add", estudioData),
  saveProyect: function(proyectData) {
    console.log(proyectData)
    return axios.post("/api/proyectos/add", proyectData)
  },
  getProject: id => axios.get(`/api/proyectos/${id}`),
  findMethods: function() {
    return axios.get(`/api/tipoestudio`)
  },
  //DULCINEA AGREGÓ:
  getProyect: function() {
    return axios.get("/api/proyectos/add")
  },
  //DULCINEA AGREGÓ:
  getOrden: function() {
    return axios.get("/api/ordenes/add")
  }
}
