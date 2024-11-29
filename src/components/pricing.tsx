// components/Pricing.tsx
'use client'

import { useState } from "react";
import { LoaderIcon, CheckIcon } from "lucide-react";
import {Switch} from "@/components/ui/switch";
import {Button} from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Types
type Interval = "month" | "year";

type ProductPrice = {
  id: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  isMostPopular: boolean;
};

// Utility Function
function toHumanPrice(price: number, decimals: number = 2) {
  return (price / 100).toFixed(decimals);
}

// Pricing Component
const Pricing = () => {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState<string>("");

  const productPrices: ProductPrice[] = [
    {
      id: "price_1",
      name: "Basic",
      description: "A basic plan for startups and individual users",
      features: [
        "AI-powered analytics",
        "Basic support",
        "5 projects limit",
        "Access to basic AI tools",
      ],
      monthlyPrice: 1000,
      yearlyPrice: 10000,
      isMostPopular: false,
    },
    {
      id: "price_2",
      name: "Premium",
      description: "A premium plan for growing businesses",
      features: [
        "Advanced AI insights",
        "Priority support",
        "Unlimited projects",
        "Access to all AI tools",
        "Custom integrations",
      ],
      monthlyPrice: 2000,
      yearlyPrice: 20000,
      isMostPopular: true,
    },
    {
      id: "price_5",
      name: "Enterprise",
      description:
        "An enterprise plan with advanced features for large organizations",
      features: [
        "Custom AI solutions",
        "24/7 dedicated support",
        "Unlimited projects",
        "Access to all AI tools",
        "Custom integrations",
        "Data security and compliance",
      ],
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      isMostPopular: false,
    },
    {
      id: "price_6",
      name: "Ultimate",
      description: "The ultimate plan with all features for industry leaders",
      features: [
        "Bespoke AI development",
        "White-glove support",
        "Unlimited projects",
        "Priority access to new AI tools",
        "Custom integrations",
        "Highest data security and compliance",
      ],
      monthlyPrice: 8000,
      yearlyPrice: 80000,
      isMostPopular: false,
    },
  ];

  const onSubscribeClick = async (priceId: string) => {
    setIndex(priceId);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <section id="pricing" className="py-14 px-4 mx-auto max-w-screen-xl">
      <div className="mx-auto max-w-5xl text-center">
        <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">
          Pricing
        </h4>
        <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
          Simple pricing for everyone.
        </h2>
        <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
          Choose an <strong>affordable plan</strong> that&apos;s packed with the best
          features for engaging your audience, creating customer loyalty, and
          driving sales.
        </p>
      </div>

      <div className="flex items-center justify-center space-x-2 mt-8">
        <Switch
          onClick={() =>
            setInterval(interval === "month" ? "year" : "month")
          }
          id="interval"
        />
        <span>Annual</span>
        <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
          2 MONTHS FREE ✨
        </span>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
        {productPrices.map((price) => (
          <div
            key={price.id}
            className={cn(
              "relative flex flex-col gap-8 p-4 text-black dark:text-white rounded-2xl border overflow-hidden max-w-[400px]",
              {
                "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                  price.isMostPopular,
              }
            )}
          >
            <div className="flex items-center">
              <div className="ml-4">
                <h2 className="text-base font-semibold">{price.name}</h2>
                <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                  {price.description}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <span className="text-4xl font-bold text-black dark:text-white">
                ${toHumanPrice(interval === "month" ? price.monthlyPrice : price.yearlyPrice, 0)}
                <span className="text-xs">/ {interval}</span>
              </span>
            </div>
            <Button
              className={cn(
                "group relative w-full gap-2 text-lg font-semibold tracking-tighter transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
              )}
              disabled={isLoading}
              onClick={() => onSubscribeClick(price.id)}
            >
              {isLoading && index === price.id ? (
                <>
                  <LoaderIcon className="mr-2 size-4 animate-spin" />
                  Subscribing
                </>
              ) : (
                "Subscribe"
              )}
            </Button>

            <hr className="m-0 h-px w-full bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
            {price.features?.length > 0 && (
              <ul className="flex flex-col gap-2">
                {price.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-xs font-medium">
                    <CheckIcon className="size-5 shrink-0 rounded-full bg-green-400 p-[2px]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
