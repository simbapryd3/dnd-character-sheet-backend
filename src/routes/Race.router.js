const express = require("express");
const router = express.Router();
const raceController = require('../controllers/Race-controller');

router.get("/all", raceController.findAllRaces);

router.get("/:id", raceController.findRaceById);

module.exports = router;
