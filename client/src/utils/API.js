import axios from "axios"

export default {
  saveOrden: function(estudioData) {
    return axios.post("/api/ordenes", estudioData)
  }
}
