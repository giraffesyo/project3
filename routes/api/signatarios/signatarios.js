const router = require("express").Router();
const nuevoSignatarioController = require("../../../controllers/nuevosignatariocontroller");

// Matches with "/api/signatarios"
router.route("/")
  .post(nuevoSignatarioController.create)
  .get(nuevoSignatarioController.findAllSignatarios);

// Matches with "/api/signtarios/:id"
router.route("/:id")
  .get(nuevoSignatarioController.findOneSignatario);




// Matches with "/api/books/:id" Porque en el index.js de api, estoy poniendo que la base es /books
// router.route("/:id")
//   .delete(booksController.remove);

module.exports = router;
