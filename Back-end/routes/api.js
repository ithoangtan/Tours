const express = require("express");
const router = express.Router();

const Tour = require("../controller/Tour.Controller");

router.get("/listTour", Tour.list_all_tour);
router.post("/createTour", Tour.create_a_tour);
router.get("/readTour", Tour.read_a_tour);
router.post("/updateTour", Tour.update_a_tour);
router.delete("/deleteTour", Tour.delete_a_tour);
// router.get("/getCommentTour", Tour.get_Comment);

module.exports = router;
