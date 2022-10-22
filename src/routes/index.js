const express = require("express");

const router = express.Router();
const userRoute = require("./user.route");
const authRoute = require("./auth.route");
////////////////////////////////////////////////////////////////
const stripeRoute = require("./stripe.route");
const storeRoute = require("./strore.route");
const gameRoute = require("./game.route");
const recomendationRoute = require("./recommendation.route");
const myRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/stripe-payment",
    route: stripeRoute,
  },
  {
    path: "/store",
    route: storeRoute,
  },
  {
    path: "/game",
    route: gameRoute,
  },
  {
    path: "/recommendation",
    route: recomendationRoute,
  },
];
myRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
