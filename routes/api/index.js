const router = require("express").Router()
const ordenRoutes = require("./ordenes")

// Book routes
router.use("/ordenes", ordenRoutes)

module.exports = router
