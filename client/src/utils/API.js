import axios from "axios"

export default {
  saveOrden: estudioData => axios.post("/api/ordenes/add", estudioData),
  saveProyect: proyectData => axios.post("/api/proyectos/add", proyectData),
  checkAvailability: (start, end) =>
    axios.get("/api/ordenes/checkavailability", {
      params: {
        start,
        end
      }
    }),
  getProject: id => axios.get(`/api/proyectos/${id}`),
  findMethods: () => axios.get(`/api/tipoestudio`),
  //DULCINEA AGREGÓ:
  getProyect: () => axios.get("/api/proyectos/add"),
  //DULCINEA AGREGÓ:
  getOrden: () => axios.get("/api/ordenes/add")
}
