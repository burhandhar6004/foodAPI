const express = require("express");
const { getParatha, getBurger, getPizza, getSoup, getDesert, getBeverages } = require("../controler/foodControler");

const router = express.Router();



router("/paratha", getParatha)
router("/burger", getBurger)
router("/pizzza", getPizza)
router("/soup", getSoup)
router("/desert", getDesert)
router("/bevr", getBeverages)


module.exports = router;
