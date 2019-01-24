const router = require("express").Router();
const SignatariosRoutes = require("./signatarios");

// Signatarios routes
router.use("/signatarios", SignatariosRoutes);

module.exports = router;
