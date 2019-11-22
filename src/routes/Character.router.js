const express = require("express");
const router = express.Router();

//GET single character
router.get("/:id", characterController.findById);

router.get("/all", characterController.findAll);

module.exports = router;
