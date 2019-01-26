const router = require("express").Router()

const ordenesController = require("../../controllers/ordenesController")
const proyectosController = require("../../controllers/proyectosController")

router.route("/ordenes/add/:id").post(ordenesController.create)

router.route("/proyectos/add").post(proyectosController.create)
module.exports = router
