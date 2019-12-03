const RaceSerivce = require("../services/Race-service");
const RaceController = require("../controllers/Race-controller");

describe("Races API Calls", () => {
  test("findAll should return an object with all races", () => {
    RaceSerivce.findAll = jest.fn(() => {});
    RaceController.findAllRaces();
    expect(RaceSerivce.findAll).toHaveBeenCalledTimes(1);
  });
});
