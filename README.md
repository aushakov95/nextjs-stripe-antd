
# Subscription Checkout Form With Next.js, Stripe Elements and Antd

![](https://miro.medium.com/max/2000/1*_CS4R2kMh4JvIUsAXkExeA.png)


# Create a Stripe Account
First, you will need to create a Stripe account: https://dashboard.stripe.com/register

# Create Product and Plan in Stripe
Follow these instructions from Stripe for creating product and plan:
https://stripe.com/docs/billing/subscriptions/set-up-subscription#create-product-plan-code
Once you create the product and the plan, keep the plan id nearby, you will need it here later.

# Installation
1. Clone the repository and install the dependencies by running `npm install`
2. Provide your Stripe public and secret keys [here](https://github.com/aushakov95/nextjs-stripe-antd/blob/master/pages/api/create-customer.js#L2) and [here](https://github.com/aushakov95/nextjs-stripe-antd/blob/master/pages/checkout.js#L9).
3. Provide your plan id [here ](https://github.com/aushakov95/nextjs-stripe-antd/blob/master/pages/api/create-customer.js#L23)

# Running the app
1. Run `npm run dev`
2. Go to http://localhost:3000/checkout
3. Try submitting billing information along with one of the test stripe cards: https://stripe.com/docs/testing
4. Check your Stripe Dashboard > Payments. You should have received a payment after submission is complete.
