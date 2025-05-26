// This is your test secret API key.
const stripe = require('stripe')('sk_test_51RSSFbRPhBaJvumKztRqmAMQzGSom0Y3fKj4cVSQw3WjlH9v0E7BcGzyxmKVyNJnA4s58KgYsf5gxp3GdwkJ9GqN00yNvxIplN');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

const YOUR_DOMAIN = 'http://localhost:4242';

app.post('/checkout', async (req, res) => {

  const items = req.body.items.map(( item )=> {
    return {
      price_data: {
        currency: 'mxn',
        product_data: {
          name: item.title
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity
    }
  })

  const cupon = req.body.descuento;

  const session = await stripe.checkout.sessions.create({
    line_items: [...items],
    mode: 'payment',
          discounts: [
        {
          coupon: cupon, // Aquí va el ID del cupón creado en Stripe
        },
      ],
    success_url: `http://localhost:4200/thanks`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`
  })

  res.status(200).json(session);
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));
