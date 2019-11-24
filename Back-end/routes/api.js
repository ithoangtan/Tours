const express = require("express");
const router = express.Router();

const Tour = require("../controllers/Tour.Controller");
const Image = require("../controllers/TourImage.Controller");
//for tour
router.get("/tour", Tour.read);
router.get("/tours", Tour.listAll);
router.post("/tour", Tour.create);
router.patch("/tour", Tour.update);
router.delete("/tour", Tour.delete);

//for img
router.get("/images", Image.listAllImageTour);
router.get("/image", Image.listAllImageTourById);
router.delete("/image", Image.delete);
router.post("/image", Image.create);
router.post("/upload", Image.upload);

module.exports = router;
