"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Currency configuration with symbols and names
const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar' },
  AUD: { symbol: 'A$', name: 'Australian Dollar' },
  AED: { symbol: 'د.إ', name: 'UAE Dirham' },
  NPR: { symbol: 'रु', name: 'Nepalese Rupee' },
  INR: { symbol: '₹', name: 'Indian Rupee' }
} as const;

// We'll rely on the API for all exchange rates
// No fallback rates will be used

type CurrencyCode = keyof typeof CURRENCIES;

interface PriceTier {
  name: string;
  credits: number;
  price: number;
  description: string;
  validity: string;
  features: string[];
  popular?: boolean;
}

const pricingTiers: PriceTier[] = [
  {
    name: "Not Sure?",
    credits: 1,
    price: 99,
    description: "Try our service with a sample edit",
    validity: "One-time",
    features: [
      "1 credit",
      "Perfect for first-time clients",
      "Experience our quality",
      "No commitment required",
      "Option to upgrade later"
    ]
  },
  {
    name: "Starter",
    credits: 3,
    price: 299,
    description: "New creators exploring premium video edits",
    validity: "24 Days",
    features: [
      "3 credits",
      "Perfect for testing our services",
      "Great for small projects",
      "Standard turnaround time",
      "Email support"
    ]
  },
  {
    name: "Growth",
    credits: 7,
    price: 699,
    description: "Scaling creators building consistent video presence",
    validity: "1 Month",
    features: [
      "7 credits",
      "Ideal for growing channels",
      "Faster turnaround time",
      "Priority support",
      "Basic revisions included"
    ],
    popular: true
  },
  {
    name: "Pro",
    credits: 15,
    price: 1299,
    description: "Coaches, educators expanding long-form branded content",
    validity: "2 Months",
    features: [
      "15 credits",
      "Perfect for professionals",
      "Priority processing",
      "Extended revisions",
      "Dedicated account manager"
    ]
  },
  {
    name: "Elite",
    credits: 30,
    price: 2499,
    description: "Brands/agencies managing high-volume video needs",
    validity: "3 Months",
    features: [
      "30 credits",
      "Best value for volume",
      "24/7 priority support",
      "Unlimited revisions",
      "Dedicated team"
    ]
  }
];

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>('USD');
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [isLoadingRates, setIsLoadingRates] = useState(true);

  // Fetch latest exchange rates from a public API
  useEffect(() => {
    const fetchRates = async () => {
      try {
        // Using a free public API (no API key required)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data.rates) {
          // Filter rates to only include the currencies we support
          const supportedCurrencies = Object.keys(CURRENCIES);
          const filteredRates: Record<string, number> = { USD: 1 }; // USD is always 1
          
          // Get rates for supported currencies from API
          for (const [currency, rate] of Object.entries(data.rates)) {
            if (supportedCurrencies.includes(currency) && currency !== 'USD') {
              filteredRates[currency] = rate as number;
            }
          }
          
          // Only set rates if we got all the currencies we need
          if (Object.keys(filteredRates).length === supportedCurrencies.length) {
            setExchangeRates(filteredRates);
            setIsLoadingRates(false);
          } else {
            throw new Error('Not all required currencies were available');
          }
        } else {
          throw new Error('Invalid API response');
        }
      } catch (error) {
        console.error('Failed to fetch exchange rates:', error);
        // No fallback - just keep the loading state or previous rates
        setIsLoadingRates(false);
      }
    };

    // Initial fetch
    fetchRates();
    
    // Refresh rates every hour
    const interval = setInterval(fetchRates, 60 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Format price based on selected currency
  const formatPrice = (price: number, currency: CurrencyCode) => {
    const rate = exchangeRates[currency] || 1;
    const convertedPrice = price * rate;
    
    // Format the number based on currency
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(convertedPrice);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="py-16 md:py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1] bg-fixed" />
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Flexible Credit-Based Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the package that fits your video editing needs
            </p>
            <div className="flex justify-center">
              <div className="bg-muted rounded-lg p-1 inline-flex">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value as CurrencyCode)}
                  className="bg-background text-foreground px-4 py-2 rounded-md border-0 focus:ring-2 focus:ring-primary-hookx focus:outline-none appearance-none"
                  disabled={isLoadingRates}
                >
                  {Object.entries(CURRENCIES).map(([code, { name }]) => (
                    <option key={code} value={code}>
                      {code} - {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {isLoadingRates && (
              <p className="text-sm text-muted-foreground">Loading exchange rates...</p>
            )}
          </div>
        </motion.div>

        <Tabs defaultValue="video" className="w-full">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {pricingTiers.map((tier) => (
              <motion.div key={tier.name} variants={item} className="h-full">
                <Card 
                  className={`h-full flex flex-col transition-all duration-300 hover:shadow-xl ${
                    tier.popular ? 'border-2 border-primary-hookx' : ''
                  }`}
                >
                  <CardHeader className="pb-4 relative">
                    {tier.popular && (
                      <div className="absolute top-0 right-6 -translate-y-1/2">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-[#765EEF] to-[#9B8AFF] rounded-full blur-[4px] opacity-50"></div>
                          <div className="relative bg-gradient-to-r from-[#765EEF] to-[#9B8AFF] text-white px-4 py-1.5 text-sm font-bold rounded-full flex items-center gap-1.5">
                            ✨ Best Value
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between items-center w-full">
                      <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {tier.credits} Credits
                      </div>
                    </div>
                    <CardDescription className="h-12">{tier.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-2xl font-bold">
                        {formatPrice(tier.price, selectedCurrency)}
                      </span>
                      <span className="text-muted-foreground ml-2">for {tier.validity}</span>
                      {selectedCurrency !== 'USD' && (
                        <p className="text-xs text-muted-foreground mt-1">
                          ≈ {formatPrice(tier.price, 'USD')}
                        </p>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a 
              href="https://calendly.com/createhookx/30min" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="px-8 py-6 text-lg">
                Book A Call
              </Button>
            </a>
            <p className="mt-4 text-muted-foreground">
              Have questions? Schedule a call with our team
            </p>
          </motion.div>
        </Tabs>
      </div>
    </section>
  );
}
