import axios from "axios"

export default {
  getOrdenes: function() {
    return axios.get("/api/ordenes")
  },
  getOrden: function(id) {
    return axios.get("/api/ordenes/" + id)
  },
  saveOrden: function(estudioData) {
    return axios.post("/api/ordenes", estudioData)
  }
}
