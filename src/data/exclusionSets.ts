import type { ExclusionSet } from "../types";

export const EXCLUSION_SETS: readonly ExclusionSet[] = [
  {
    id: 1,
    title: "Set 1 — Peanut and tree nut",
    summary: "Dedicated production runs eliminating peanuts and all tree nuts.",
    details: "Formulated for travellers avoiding peanuts (groundnuts) and tree nuts (such as almonds, hazelnuts, walnuts, cashews, pecans, Brazil nuts, pistachio nuts and macadamia nuts)."
  },
  {
    id: 2,
    title: "Set 2 — Peanut, tree nut and sesame",
    summary: "Dedicated runs eliminating peanuts, tree nuts and sesame seeds or oils.",
    details: "Matches the profile in our London worked trip example. Eliminates peanuts, tree nuts and sesame ingredients, derivatives, tahini and sesame oil."
  },
  {
    id: 3,
    title: "Set 3 — Milk and egg",
    summary: "Dedicated dairy-free and egg-free production cycles.",
    details: "Formulated for travellers managing cow’s milk, dairy proteins, lactose and all bird egg products across preparation, baking and cook sessions."
  },
  {
    id: 4,
    title: "Set 4 — Gluten-containing cereals",
    summary: "Dedicated gluten-free production with batch-verified raw materials.",
    details: "Excludes wheat (including spelt and Khorasan wheat), rye, barley and oats, using certified ingredients and pre-run kitchen swab testing."
  },
  {
    id: 5,
    title: "Set 5 — Fish, crustacean and mollusc",
    summary: "Dedicated seafood-free kitchen runs.",
    details: "Formulated to exclude finned fish, crustaceans (such as prawns, crabs and lobsters) and molluscs (such as mussels, oysters and squid)."
  },
  {
    id: 6,
    title: "Set 6 — All of the exclusions in sets 1–5 combined",
    summary: "Comprehensive multi-allergen protocol combining exclusions 1 through 5.",
    details: "Combines all exclusions from Sets 1 to 5 into one consolidated production protocol. Note: Set 6 covers the specified five categories and does not cover every possible allergen outside these listed sets."
  }
];
