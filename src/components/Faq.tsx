import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/faqs";

interface FaqProps {
  onOpenExclusionPanel: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onOpenExclusionPanel }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-location": true // default first one open for discovery
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleExclusionLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onOpenExclusionPanel();
    const panel = document.getElementById("exclusion-sets-panel");
    if (panel && typeof panel.scrollIntoView === "function") {
      panel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-heading">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Common Enquiries</span>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-lead">
            Key details regarding the planned London pilot, operational parameters, and
            allergen exclusion boundaries.
          </p>
        </div>

        <div className="faq-accordion" role="presentation">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div key={item.id} className="faq-item">
                <button
                  id={`faq-btn-${item.id}`}
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-text">{item.question}</span>
                  <span className={`faq-chevron ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className="faq-content"
                  >
                    <p className="faq-answer-p">{item.answerText}</p>

                    {item.linkToExclusionSets && (
                      <div className="faq-action-row">
                        <a
                          href="#exclusion-sets-panel"
                          onClick={handleExclusionLinkClick}
                          className="faq-inline-link"
                        >
                          View the 6 planned exclusion sets
                          <span aria-hidden="true"> →</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
