const raceService = require("./services/Race-service");

class RaceController {
  static async findAllRaces(req, res) {
    const allRaces = await raceService.findAll();
    const { name, url } = allRaces;
    const raceId = url.match(/[0-9]+$/i)[0];
    res.json({name, raceId});
  }
  
  static async findRaceById(req, res) {
    const id = req.params.id;
    const foundRace = await raceService.findById(id);
    const { index, name, speed, ability_bonuses, alignment, age } = foundRace
    res.json({index, name, speed, ability_bonuses, alignment, age})
  }
}

module.exports = RaceController;
