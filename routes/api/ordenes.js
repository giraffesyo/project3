const router = require("express").Router()
const ordenesController = require("../../controllers/ordenesController")

router.route("/").post(ordenesController.create)
module.exports = router
