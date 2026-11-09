import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/faqs";

interface FaqProps {
  onOpenExclusionPanel: () => void;
}

export const Faq: React.FC<FaqProps> = ({ onOpenExclusionPanel }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-location": true // default first open for discovery
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
          <span className="section-eyebrow">Common Questions</span>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-lead">
            Clear facts regarding pilot parameters, supported allergen profiles, handover mechanics, and local data storage.
          </p>
        </div>

        <div className="faq-accordion-container" role="presentation">
          {FAQ_ITEMS.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div key={item.id} className={`faq-card ${isOpen ? "is-active" : ""}`}>
                <button
                  id={`faq-btn-${item.id}`}
                  type="button"
                  className="faq-question-button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                >
                  <span className="faq-question-label">{item.question}</span>
                  <span className={`faq-icon-rotator ${isOpen ? "is-expanded" : ""}`} aria-hidden="true">
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
                    className="faq-answer-panel"
                  >
                    <p className="faq-answer-text">{item.answerText}</p>

                    {item.linkToExclusionSets && (
                      <div className="faq-panel-link-row">
                        <a
                          href="#exclusion-sets-panel"
                          onClick={handleExclusionLinkClick}
                          className="faq-jump-link"
                        >
                          <span>View the 6 planned exclusion sets</span>
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
