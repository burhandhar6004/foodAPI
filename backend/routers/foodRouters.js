const express = require("express");
const { getParatha, getBurger, getPizza, getSoup, getDesert, getBeverages } = require("../controler/foodControler");

const router = express.Router();



router.get("/paratha", getParatha)
router.get("/burger", getBurger)
router.get("/pizzza", getPizza)
router.get("/soup", getSoup)
router.get("/desert", getDesert)
router.get("/bevr", getBeverages)


module.exports = router;
