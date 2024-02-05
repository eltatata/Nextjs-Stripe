import { Stripe } from "stripe";
import PriceCards from "@/components/PriceCards";

const getPrices = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const prices = await stripe.prices.list();

  const sortedPrices = prices.data.sort((a, b) => a.unit_amount - b.unit_amount);
  return sortedPrices;
}

async function PricingPage() {
  const prices = await getPrices();

  return (
    <div className="flex flex-col justify-center items-center pt-32 gap-10">
      <h2 className="text-5xl font-bold">Pricing</h2>
      <div className="flex gap-2">
        <PriceCards prices={prices} />
      </div>
    </div>
  );
}

export default PricingPage