const path = require("path")
const router = require("express").Router()
const apiRoutes = require("./api")
const metodosRoutes = require("./api/metodos")
const signatariosRoutes = require("./api/signatarios")

// API Routes DULCINEA
router.use("/api", metodosRoutes)
router.use("/api", signatariosRoutes)

// API Routes JESSY
router.use("/api", apiRoutes)

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
  //res.send('<h1>404</h1>')
})

module.exports = router
