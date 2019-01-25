const router = require("express").Router();
const nuevoSignatarioRoutes = require("./metodos");

// Metodos routes
router.use("/metodos", nuevoSignatarioRoutes);

module.exports = router;
