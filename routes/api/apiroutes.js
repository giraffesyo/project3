const router = require("express").Router()
const controller = require("../../controllers/estudiocontroller")

router.route("/api/ordenes").post(controller.create)
module.exports = router
