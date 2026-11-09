import type { PricingProduct } from "../types";

export const PRICING_PRODUCTS: readonly PricingProduct[] = [
  {
    id: "single-arrival-kit",
    name: "Single Arrival Kit",
    price: "£25",
    meals: 1,
    handovers: 1,
    description: "One verified meal on arrival"
  },
  {
    id: "daily-safety-pack",
    name: "Daily Safety Pack",
    price: "£45",
    meals: 2,
    handovers: 1,
    description: "Breakfast and one further meal for one day"
  },
  {
    id: "solo-traveller-meal-kit",
    name: "Solo Traveller Meal Kit",
    price: "£120",
    meals: 6,
    handovers: 2,
    description: "A mapped short trip for one traveller"
  },
  {
    id: "family-group-travel-kit",
    name: "Family / Group Travel Kit",
    price: "£350",
    meals: 14,
    handovers: 2,
    description: "A mapped trip for a family or group booking"
  },
  {
    id: "frequent-traveller-subscription",
    name: "Frequent Traveller Subscription",
    price: "£220 a month",
    priceSuffix: "a month",
    meals: 8,
    handovers: 2,
    description: "Monthly cover for a regular traveller"
  },
  {
    id: "corporate-airline-pack",
    name: "Corporate / Airline Pack",
    price: "£600",
    meals: 24,
    handovers: 3,
    description: "A block for an employer’s team trip",
    note: "Employer accounts have a £250 set-up fee."
  }
];
