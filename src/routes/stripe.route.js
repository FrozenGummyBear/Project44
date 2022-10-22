const express = require("express");

const route = express();
const validate = require("../middlewares/validate");
const { stripeController } = require("../controllers");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

route.get("/:userID/:pogs", stripeController.createCheckOut);

module.exports = route;
