import axios from "axios"
//axios.defaults.baseURL= "http://localhost:5000";

export default {
  saveOrden: estudioData => axios.post("/api/ordenes/add", estudioData),
  saveProyect: function(proyectData) {
    console.log(proyectData)
    return axios.post("/api/proyectos/add", proyectData)
  },
  getProject: id => axios.get(`/api/proyectos/${id}`),
  //DULCINEA AGREGÓ:
  getProyect: function() {
    return axios.get("/api/proyectos/add")
  },
  //DULCINEA AGREGÓ:
  getOrden: function() {
    return axios.get("/api/ordenes/add")
  }
}
