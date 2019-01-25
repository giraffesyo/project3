const router = require("express").Router();
const nuevoSignatarioController = require("../../../controllers/nuevosignatariocontroller");

// Matches with "/api/metodos"
router.route("/")
//   .post(booksController.create)
  .get(nuevoSignatarioController.findAll);

// Matches with "/api/books/:id" Porque en el index.js de api, estoy poniendo que la base es /books
// router.route("/:id")
//   .delete(booksController.remove);

module.exports = router;
