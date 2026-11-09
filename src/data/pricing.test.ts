import { describe, it, expect } from "vitest";
import { PRICING_PRODUCTS } from "./pricing";

describe("Pricing Structured Data", () => {
  it("has exactly 6 products matching the specification", () => {
    expect(PRICING_PRODUCTS).toHaveLength(6);
  });

  it("matches exact commercial figures and counts", () => {
    const expected = [
      {
        name: "Single Arrival Kit",
        price: "£25",
        meals: 1,
        handovers: 1,
        description: "One verified meal on arrival"
      },
      {
        name: "Daily Safety Pack",
        price: "£45",
        meals: 2,
        handovers: 1,
        description: "Breakfast and one further meal for one day"
      },
      {
        name: "Solo Traveller Meal Kit",
        price: "£120",
        meals: 6,
        handovers: 2,
        description: "A mapped short trip for one traveller"
      },
      {
        name: "Family / Group Travel Kit",
        price: "£350",
        meals: 14,
        handovers: 2,
        description: "A mapped trip for a family or group booking"
      },
      {
        name: "Frequent Traveller Subscription",
        price: "£220 a month",
        meals: 8,
        handovers: 2,
        description: "Monthly cover for a regular traveller"
      },
      {
        name: "Corporate / Airline Pack",
        price: "£600",
        meals: 24,
        handovers: 3,
        description: "A block for an employer’s team trip"
      }
    ];

    expected.forEach((exp, idx) => {
      const prod = PRICING_PRODUCTS[idx];
      expect(prod.name).toBe(exp.name);
      expect(prod.price).toBe(exp.price);
      expect(prod.meals).toBe(exp.meals);
      expect(prod.handovers).toBe(exp.handovers);
      expect(prod.description).toBe(exp.description);
    });
  });

  it("displays £600 for corporate pack and includes £250 employer set-up fee note", () => {
    const corporate = PRICING_PRODUCTS.find((p) => p.name.includes("Corporate"));
    expect(corporate).toBeDefined();
    expect(corporate?.price).toBe("£600");
    expect(corporate?.note).toBe("Employer accounts have a £250 set-up fee.");
  });

  it("only the Frequent Traveller Subscription has monthly wording", () => {
    const monthlyItems = PRICING_PRODUCTS.filter((p) =>
      p.price.toLowerCase().includes("month")
    );
    expect(monthlyItems).toHaveLength(1);
    expect(monthlyItems[0].name).toBe("Frequent Traveller Subscription");
  });
});
