const express = require("express");
const Stripe = require("stripe");

if (process.env.NODE_ENV !== "production") {
  const path = require("path");
  require("dotenv").config({ path: path.resolve(process.cwd(), ".env.local") });
}

const app = express();

const keyPublishable = process.env.REACT_APP_PUBLISHABLE_KEY;
// const keySecret = process.env.REACT_APP_SECRET_KEY;
const keySecret = "sk_test_5fIs3FEK7bHjUjepFdC6Zls9";
const stripe = Stripe(keySecret);

app.use(require("body-parser").urlencoded({ extended: false }));

app.use(require("body-parser").json());

const path = require("path");
app.use("/static", express.static("./build/static"));
app.get("*", (request, result) => {
  result.sendFile(path.resolve("./build/index.html"));
});

app.use("/public/images", express.static(path.join(__dirname, "images")));

app.post("/charge", (request, result) => {
  // here we need to calculate the price to pay depending on request infos
  // const amount = calculateAmount(request.body.products);
  // console.log("request.body.stripeData.email", request.body.stripeData.email);
  const amount = parseInt(request.body.amount.amountTotal);
  stripe.customers
    .create({
      email: request.body.stripeData.email,
      source: request.body.stripeData.id
      // amount: request.body.amount.amountTotal
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: "Sample Charge",
        currency: "eur",
        customer: customer.id
      })
    )
    .then(charge => result.json(charge));
});

const port = process.env.PORT || 8000

app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
