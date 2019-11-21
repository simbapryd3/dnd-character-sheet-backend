const express = "express";
const router = express.router();

//GET single class
router.get("/:id", classController.findClassById);

//GET all classes
router.get("/all", classController.findAllClasses);

module.exports = router;
