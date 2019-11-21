const express = "express";
const router = express.router();

//GET single race
router.get("/:id", raceController.renderAll);

//GET all races
router.get("/all", raceController.renderAll);

module.exports = router;
