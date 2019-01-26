import axios from "axios"

export default {
  saveOrden: function(estudioData) {
    return (
      axios.post("/api/ordenes/add/:id", estudioData),
      axios.get("/api/ordenes/add/:id", estudioData)
    )
  },
  saveProyect: function(proyectData) {
    console.log(proyectData)
    return axios.post("/api/proyectos/add", proyectData)
  },
  //DULCINEA AGREGÓ:
  getProyect:function() {
    return axios.get("/api/proyectos/add");
  },
  //DULCINEA AGREGÓ:
  getOrden:function() {
    return axios.get("/api/ordenes/add");
  },
}
