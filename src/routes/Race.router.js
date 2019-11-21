const express = "express";
const router = express.router();

//GET single race
router.get("/:id", raceController.findById);

//GET all races
router.get("/all", raceController.findAll);

module.exports = router;
