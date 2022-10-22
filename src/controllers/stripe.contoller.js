const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const { userService } = require("../services");

const createCheckOut = catchAsync(async (req, res) => {
  console.log(req.params.userID);
  console.log("====================================");
  console.log(req.params.pogs);
  console.log("====================================");
  console.log("PayementURL:", process.env.DEV_PAYMENT_URL);
  // const user = await oredrService.getOrderDetail(req.params.userID);
  // if (!order) throw new ApiError(404, "user not found");
  try {
    const price = req.params.pogs / 100;
    const name = `${req.params.pogs} pogs`;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: name,
            },
            unit_amount: price * 100,
          },
          quantity: 1,
        },
      ],

      success_url: `${process.env.DEV_PAYMENT_URL}/users/success/${req.params.userID}/${req.params.pogs}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.DEV_PAYMENT_URL}/users/cancel/${req.params.userID}`,
    });
    // console.log(session);
    res.redirect(session.url);
    // res.json({ url });
  } catch (e) {
    console.log("====================================");
    console.log(e);
    console.log("====================================");
    res.redirect(
      `${process.env.DEV_PAYMENT_URL}/users/cancel/${req.params.userID}`
    );
  }
});

module.exports = { createCheckOut };
