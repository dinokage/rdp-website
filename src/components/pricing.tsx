"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader, Check } from 'lucide-react'; // Adjust this to your icons library.
import {Switch} from '@/components/ui/switch'; // Create or use an equivalent component.
import {Button} from '@/components/ui/button'; // Create or use an equivalent component.

// Utility function for price formatting
const toHumanPrice = (price: number, decimals: number = 2): string => {
  return (price / 100).toFixed(decimals);
};

// Type definitions
type Interval = 'month' | 'year';

type ProductPrice = {
  id: string;
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
  isMostPopular: boolean;
};

// Pricing component
const Pricing = () => {
  const [interval, setInterval] = useState<Interval>('month');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPriceId, setSelectedPriceId] = useState<string>('');
  const [animateKey, setAnimateKey] = useState(0);

  const productPrices: ProductPrice[] = [
    {
      id: 'price_1',
      name: 'Basic',
      description: 'A basic plan for startups and individual users',
      features: [
        'AI-powered analytics',
        'Basic support',
        '5 projects limit',
        'Access to basic AI tools',
      ],
      monthlyPrice: 1000,
      yearlyPrice: 10000,
      isMostPopular: false,
    },
    {
      id: 'price_2',
      name: 'Premium',
      description: 'A premium plan for growing businesses',
      features: [
        'Advanced AI insights',
        'Priority support',
        'Unlimited projects',
        'Access to all AI tools',
        'Custom integrations',
      ],
      monthlyPrice: 2000,
      yearlyPrice: 20000,
      isMostPopular: true,
    },
    {
      id: 'price_5',
      name: 'Enterprise',
      description: 'An enterprise plan with advanced features for large organizations',
      features: [
        'Custom AI solutions',
        '24/7 dedicated support',
        'Unlimited projects',
        'Access to all AI tools',
        'Custom integrations',
        'Data security and compliance',
      ],
      monthlyPrice: 5000,
      yearlyPrice: 50000,
      isMostPopular: false,
    },
    {
      id: 'price_6',
      name: 'Ultimate',
      description: 'The ultimate plan with all features for industry leaders',
      features: [
        'Bespoke AI development',
        'White-glove support',
        'Unlimited projects',
        'Priority access to new AI tools',
        'Custom integrations',
        'Highest data security and compliance',
      ],
      monthlyPrice: 8000,
      yearlyPrice: 80000,
      isMostPopular: false,
    },
  ];

  const handleSubscribeClick = async (priceId: string) => {
    setSelectedPriceId(priceId);
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    setIsLoading(false);
  };


  return (
    <section id="pricing" className="py-14 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-8">
        <div className="text-center max-w-5xl mx-auto">
          <h4 className="text-xl font-bold tracking-tight text-black dark:text-white">Pricing</h4>
          <h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
            Simple pricing for everyone.
          </h2>
          <p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
            Choose an <strong>affordable plan</strong> that&apos;s packed with the best features for engaging your
            audience, creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2">
        <Switch
  onClick={() => {
    setInterval((prevInterval) => {
      const newInterval = prevInterval === "month" ? "year" : "month";
      setAnimateKey((prevKey) => prevKey + 1); // Trigger reanimation
      return newInterval;
    });
  }}
  id="interval"
/>

          <span>Annual</span>
          <span className="inline-block bg-black text-white dark:bg-white dark:text-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide rounded-full">
            2 MONTHS FREE ✨
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto">
          {productPrices.map((price, idx) => (
            <div
              key={price.id}
              className={`relative flex flex-col gap-8 p-4 border rounded-2xl max-w-[400px] text-black dark:text-white ${
                price.isMostPopular ? 'border-2 border-[var(--color-one)]' : ''
              }`}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">{price.name}</h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">{price.description}</p>
                </div>
              </div>

              <motion.div
  key={`${animateKey}-${price.id}`}
  initial={{ opacity: 0, y: 40 }} // Start from a higher vertical offset
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -40 }} // Add an exit animation
  transition={{
    duration: 0.5, // Longer duration for smoother animation
    ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smoothness
    delay: idx * 0.05, // Slight stagger effect
  }}
  className="flex flex-row gap-1"
>
  <span className="text-4xl font-bold text-black dark:text-white">
    ${toHumanPrice(interval === 'month' ? price.monthlyPrice : price.yearlyPrice, 0)}
    <span className="text-xs">/ {interval}</span>
  </span>
</motion.div>


              <Button
                className="group relative w-full gap-2 text-lg font-semibold"
                disabled={isLoading}
                onClick={() => handleSubscribeClick(price.id)}
              >
                {isLoading && selectedPriceId === price.id ? (
                  <>
                    <Loader className="mr-2 animate-spin" /> Subscribing
                  </>
                ) : (
                  'Subscribe'
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />

              {price.features.length > 0 && (
                <ul className="flex flex-col gap-2">
                  {price.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-3 text-xs font-medium">
                      <Check className="size-5 shrink-0 bg-green-400 p-[2px] text-black rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
