const express = "express";
const router = express.router();

router.get("/all", raceController.findAllRaces);

router.get("/:id", raceController.findRaceById);

module.exports = router;
