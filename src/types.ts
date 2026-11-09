export type PilotInput = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organisationName: string;
};

export type SavedPilotRecord = PilotInput & {
  submittedAt: string;
};

export type PricingProduct = {
  id: string;
  name: string;
  price: string;
  priceSuffix?: string;
  meals: number;
  handovers: number;
  description: string;
  note?: string;
};

export type ExclusionSet = {
  id: number;
  title: string;
  summary: string;
  details: string;
};

export type ItineraryStep = {
  stepNumber: number;
  title: string;
  type: "itinerary" | "analysis" | "match" | "handover-1" | "handover-2" | "ledger";
  badge: string;
  summary: string;
  mealsCovered?: number;
  isHandover?: boolean;
  handoverLabel?: string;
  details: string[];
};

export type FaqItem = {
  id: string;
  question: string;
  answerText: string;
  linkToExclusionSets?: boolean;
};
