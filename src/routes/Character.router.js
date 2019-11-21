const express = "express";
const router = express.router();

//GET single character
router.get("/:id", characterController.findById);

router.get("/all", characterController.findAll);

module.exports = router;
