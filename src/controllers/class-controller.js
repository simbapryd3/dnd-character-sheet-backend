const ClassService = require("./services/class.service");

class ClassController {
  static async findAllClasses(req, res) {
    const allClasses = await ClassService.findAll();
    const { name, url } = allClasses;
    const classId = url.match(/\/[0-12]?$/i);
    res.json({ name, classId });
  }

  static async findClassById(req, res) {
    const id = req.params.id;
    const foundClass = await classService.findById(id);
    const { index, name, hit_die } = foundClass;
    res.json({ index, name, hit_die });
  }
}
module.exports = ClassController;
