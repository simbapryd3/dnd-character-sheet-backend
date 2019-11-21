const express = "express";
const router = express.router();

//GET single character
router.get("/:id", characterController.renderAll);

router.get("/all", characterController.renderAll);

module.exports = router;
