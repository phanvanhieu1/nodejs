const authorController = require('../controllers/authorController');

const router = require('express').Router();

//ADD OTHER
router.post("/", authorController.addAuthor);
//GET ALL AUTHOR
router.get("/", authorController.getallAuthor);
//GET AN AUTHOR
router.get("/:id", authorController.getAnAuthor);
//UPDATE AN AUTHOR
router.put("/:id", authorController.updateAuthor);
//DELETE AN AUTHOR
router.delete("/:id", authorController.deleteAuthor);

module.exports = router;