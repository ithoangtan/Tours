const express = require("express");
const router = express.Router();

const Tour = require("../controllers/Tour.Controller");

router.get("/tour", Tour.read);
router.get("/tours", Tour.listAll);
router.post("/tour", Tour.create);
router.patch("/tour", Tour.update);
router.delete("/tour", Tour.delete);

module.exports = router;
