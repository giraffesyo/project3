const router = require("express").Router()

const ordenesController = require("../../controllers/ordenesController")
const proyectosController = require("../../controllers/proyectosController")

router.route("/ordenes/add/:id").post(ordenesController.create)

router.route("/proyectos/add").post(proyectosController.create)

//DULCINEA AGREGÓ:
router.route("/proyectos/add").get(proyectosController.findAllProyectos)
//DULCINEA AGREGÓ:
router.route("/ordenes/add").get(ordenesController.findAllOrdenes)

module.exports = router
