const router = require("express").Router();
const nuevoSignatarioController = require("../../../controllers/nuevosignatariocontroller");

// Matches with "/api/metodos"
router.route("/")
//   .post(booksController.create)
  .get(nuevoSignatarioController.findAll);

//Matches with "api/metodos/signatario/:id"
router.route("/signatario/:id")
  .post(nuevoSignatarioController.createSignatarioEnMetodo)
  .get(nuevoSignatarioController.findSignatarioEnMetodo);


// router.route("/:id")
//   .delete(booksController.remove);

module.exports = router;
