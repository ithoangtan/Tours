const express = require("express");
const router = express.Router();

const tour = require("../controllers/tour.controller");
const schedule = require("../controllers/schedule.controller");
const image = require("../controllers/tourImage.controller");
//for tour
router.get("/tour", tour.read);
router.get("/tours", tour.listAll);
router.post("/tour", tour.create);
router.patch("/tour", tour.update);
router.delete("/tour", tour.delete);

//for schedule
router.get("/schedule", schedule.read);
router.get("/schedules", schedule.listAll);
router.post("/schedule", schedule.create);
router.patch("/schedule", schedule.update);
router.delete("/schedule", schedule.delete);

//for img
router.get("/images", image.listAllImageTour);
router.get("/image", image.listAllImageTourById);
router.delete("/image", image.delete);
router.post("/image", image.create);
router.post("/upload", image.upload);

module.exports = router;
