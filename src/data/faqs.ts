import type { FaqItem } from "../types";

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: "faq-location",
    question: "Where is the pilot planned?",
    answerText:
      "The initial service is planned for London hotels, venues and airports."
  },
  {
    id: "faq-allergen-profiles",
    question: "Which allergen profiles can the planned service cover?",
    answerText:
      "The planned service supports six defined allergen exclusion sets, ranging from single categories to combined profiles. A profile outside these supported sets must be identified at the order stage so travellers are clearly notified.",
    linkToExclusionSets: true
  },
  {
    id: "faq-handover",
    question: "What is a handover?",
    answerText:
      "A handover is a transfer of a kit to an agreed receiving point, such as a hotel desk or venue reception. One handover can cover multiple meals. The £120 Solo Traveller Meal Kit illustrates this with six meals across two handovers."
  },
  {
    id: "faq-itinerary-changes",
    question: "What happens if my itinerary changes?",
    answerText:
      "The planned exposure engine reassesses affected occasions and identifies meals or handover windows that need review. Accommodating changes depends on lead time and production cut-offs; not every last-minute change can be accommodated."
  },
  {
    id: "faq-order-here",
    question: "Can I order a kit here?",
    answerText:
      "This page is a pilot demonstration. Visitors can explore the proposed service and record pilot interest locally. There is no ordering or payment flow."
  },
  {
    id: "faq-pilot-request-recipient",
    question: "Who receives my pilot request?",
    answerText:
      "This frontend demonstration saves the entry only in the browser used to submit it. It does not send it to Safe Travel Meal Kits Limited. Clearing site data removes locally saved requests."
  }
];
