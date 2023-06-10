import { Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripePromise = (): Promise<Stripe | null> => {
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '';

  if (!stripePromise && process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
    stripePromise = loadStripe(key) as Promise<Stripe | null>;
  }

  return stripePromise;
};

export default getStripePromise;
