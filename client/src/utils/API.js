import axios from "axios"

export default {
  saveOrden: function(estudioData) {
    return (
      axios.post("/api/ordenes/add/:id", estudioData),
      axios.get("/api/ordenes/add/:id", estudioData)
    )
  },
  saveProyect: function(proyectData) {
    return axios.post("/api/proyectos/add", proyectData)
  }
}
