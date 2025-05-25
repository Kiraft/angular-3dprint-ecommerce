// This is your test secret API key.
const stripe = Stripe("pk_test_51RSSFbRPhBaJvumKwj1W7bdOaXnSTxcgUKNRfkj7V6VI8TScyby1Gm8iDKbzkWSFYCoXMmInvCRQBJwVVAkSuO9j000Z4E3KFN");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}