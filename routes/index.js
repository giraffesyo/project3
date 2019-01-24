const path = require("path");
const router = require("express").Router();
const metodosRoutes = require("./api/metodos");
const signatariosRoutes = require("./api/signatarios")


// API Routes 
router.use("/api", metodosRoutes);
router.use("/api", signatariosRoutes);



// If no API routes are hit, send the React app
router.use(function(req, res) {
  //res.sendFile(path.join(__dirname, "../client/build/index.html"));
  res.send('<h1>404</h1>')
});

module.exports = router;
