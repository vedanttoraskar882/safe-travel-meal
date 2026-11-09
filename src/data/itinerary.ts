import type { ItineraryStep } from "../types";

export const LONDON_ITINERARY_STEPS: readonly ItineraryStep[] = [
  {
    stepNumber: 1,
    title: "Map the trip",
    type: "itinerary",
    badge: "Itinerary Mapping",
    summary:
      "The example includes a Southwark hotel stay, a City meeting venue and departure travel. The traveller’s profile corresponds to exclusion set 2: peanut, tree nut and sesame.",
    details: [
      "Timeline: Southwark hotel stay, morning seminar in the City, transit departure",
      "Declared allergen profile: Peanut, tree nut and sesame (Exclusion Set 2)",
      "Total trip meal occasions evaluated: 8 distinct points of consumption"
    ]
  },
  {
    stepNumber: 2,
    title: "Identify the gaps",
    type: "analysis",
    badge: "Exposure Evaluation",
    summary:
      "Six of eight meal occasions cross the relevant exposure threshold in this example. The traveller accepts all six.",
    mealsCovered: 6,
    details: [
      "Identified exposure windows: 6 meals (Arrival dinner, Hotel breakfast Day 1 & Day 2, Working lunch Day 2, Afternoon pack, Departure transit meal)",
      "Low-risk occasions not required: 2 self-catered / low-exposure events omitted",
      "Traveller confirms: All 6 high-exposure occasions accepted for meal kit planning"
    ]
  },
  {
    stepNumber: 3,
    title: "Match the pack",
    type: "match",
    badge: "Kit Matching",
    summary:
      "Six meals and two handovers correspond to the £120 Solo Traveller Meal Kit. The planned scheduler checks compatible stock and courier windows.",
    mealsCovered: 6,
    details: [
      "Selected package: Solo Traveller Meal Kit (£120)",
      "Total allocated meals: 6 verified allergen-exclusion meals",
      "Total coordinated handovers: 2 physical receiving points",
      "Planned scheduler: Confirms stock batch for Exclusion Set 2 & scheduled courier dispatch"
    ]
  },
  {
    stepNumber: 4,
    title: "Follow the first handover",
    type: "handover-1",
    badge: "Handover 1 of 2",
    isHandover: true,
    handoverLabel: "Handover Point 1 — Southwark Hotel Desk",
    summary:
      "A sealed kit reaches the Southwark hotel desk on arrival evening. The duty manager records receipt. The meals go into chilled storage, with each subsequent release recorded.",
    details: [
      "Location: Southwark hotel front desk (Arrival evening)",
      "Kit delivery: Sealed tamper-evident container with initial 3 meals",
      "Venue check: Duty manager records secure intake and confirms unbroken security seal",
      "Storage protocol: Chilled storage at 2°C – 4°C with timestamped release logs for each meal"
    ]
  },
  {
    stepNumber: 5,
    title: "Follow the second handover",
    type: "handover-2",
    badge: "Handover 2 of 2",
    isHandover: true,
    handoverLabel: "Handover Point 2 — City Meeting Venue Reception",
    summary:
      "The next kit reaches the City venue’s reception before lunch on day two. The departure meal travels in a sealed insulated pouch.",
    details: [
      "Location: City meeting venue reception (Day 2 pre-lunch)",
      "Kit delivery: Remaining 3 meals (lunch, afternoon pack, and departure transit meal)",
      "Transit provision: Departure meal transferred into a sealed insulated thermal pouch",
      "Chain-of-custody: Reception signature and thermal seal check recorded"
    ]
  },
  {
    stepNumber: 6,
    title: "Review the record",
    type: "ledger",
    badge: "Ledger Export",
    summary:
      "The planned trip export brings together run references, swab references, seals, handovers, releases and recorded exceptions.",
    details: [
      "Hash-linked record entries connecting kitchen run to destination reception",
      "Pre-cook environment ATP swab ID & batch declaration links",
      "Tamper-evident seal numbers verified at both Southwark and City handovers",
      "Continuous verification log downloadable for corporate travel compliance"
    ]
  }
];
