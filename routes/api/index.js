const router = require("express").Router()
const routes = require("./apiroutes")

// Book routes
router.use("/apiroutes", routes)

module.exports = router
