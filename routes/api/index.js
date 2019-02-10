const router = require("express").Router()

const ordenesController = require("../../controllers/ordenesController")
const proyectosController = require("../../controllers/proyectosController")
const tipoEstudioController = require("../../controllers/tipodestudioController")
//Crear una orden
router.route("/ordenes/add").post(ordenesController.create)
//Checar empleados disponibles en la fecha dada
router
  .route("/ordenes/checkavailability")
  .get(ordenesController.findAvailability)
//Crear un nuevo proyecto
router.route("/proyectos/add").post(proyectosController.create)
//Get all tipos de estudio
router.route("/tipoestudio/").get(tipoEstudioController.findAll)
//DULCINEA AGREGÓ:
router.route("/proyectos/add").get(proyectosController.findAllProyectos)
//DULCINEA AGREGÓ:
router.route("/ordenes/add").get(ordenesController.findAllOrdenes)

module.exports = router
