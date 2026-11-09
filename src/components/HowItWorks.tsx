import React, { useEffect, useRef, useState } from "react";
import { EXCLUSION_SETS } from "../data/exclusionSets";
import { LONDON_ITINERARY_STEPS } from "../data/itinerary";

interface HowItWorksProps {
  isExclusionPanelOpen: boolean;
  onToggleExclusionPanel: (open?: boolean) => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  isExclusionPanelOpen,
  onToggleExclusionPanel
}) => {
  const itineraryRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = itineraryRef.current;
    if (!el) return;

    // Defensively check prefers-reduced-motion
    if (typeof window.matchMedia === "function") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setHasAnimated(true);
        return;
      }
    }

    // Defensively check IntersectionObserver
    if (typeof window.IntersectionObserver === "function") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHasAnimated(true);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      return () => observer.disconnect();
    } else {
      setHasAnimated(true);
    }
  }, []);

  return (
    <section id="how-it-works" className="how-it-works-section" aria-labelledby="hiw-heading">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">The London Itinerary Model</span>
          <h2 id="hiw-heading" className="section-title">
            One London trip, six meals, two handovers.
          </h2>
          <div className="journey-meta-badge">
            <span className="badge badge-accent">
              Illustrative journey from the business plan
            </span>
          </div>
          <p className="section-lead">
            Follow a single traveller managing severe peanut, tree nut and sesame allergies
            (Exclusion Set 2) through a two-day Southwark and City of London schedule.
          </p>
        </div>

        {/* Visual Distinction Banner: 6 Meals vs 2 Handovers */}
        <div className="meals-vs-handovers-banner" role="region" aria-label="Meals and handovers summary">
          <div className="mvsh-item mvsh-meals">
            <div className="mvsh-icon" aria-hidden="true">🍱</div>
            <div className="mvsh-text">
              <span className="mvsh-count">6 Meals Planned</span>
              <span className="mvsh-desc">Covering 6 accepted exposure windows across 48 hours</span>
            </div>
          </div>
          <div className="mvsh-divider" aria-hidden="true">delivered in</div>
          <div className="mvsh-item mvsh-handovers">
            <div className="mvsh-icon" aria-hidden="true">🤝</div>
            <div className="mvsh-text">
              <span className="mvsh-count">2 Physical Handovers</span>
              <span className="mvsh-desc">Handover 1 at Southwark (3 meals) + Handover 2 in the City (3 meals)</span>
            </div>
          </div>
        </div>

        {/* Vertical Worked London Itinerary */}
        <div
          ref={itineraryRef}
          className={`vertical-itinerary-container ${hasAnimated ? "is-animated" : ""}`}
        >
          {/* Subtle connecting route line */}
          <div className="itinerary-route-track" aria-hidden="true">
            <div className="itinerary-route-progress" />
          </div>

          <div className="itinerary-steps-list">
            {LONDON_ITINERARY_STEPS.map((step) => {
              const isHandover = step.isHandover;

              return (
                <article
                  key={step.stepNumber}
                  className={`itinerary-step-card ${isHandover ? "step-handover-highlight" : ""}`}
                  aria-labelledby={`step-${step.stepNumber}-title`}
                >
                  <div className="step-gutter">
                    <div className={`step-circle ${isHandover ? "handover-circle" : ""}`}>
                      {isHandover ? (
                        <span className="handover-num">H{step.stepNumber === 4 ? "1" : "2"}</span>
                      ) : (
                        <span className="step-num">{step.stepNumber}</span>
                      )}
                    </div>
                  </div>

                  <div className="step-main">
                    <div className="step-meta-row">
                      <span className={`step-badge ${isHandover ? "badge-handover" : "badge-standard"}`}>
                        {step.badge}
                      </span>
                      {isHandover && (
                        <span className="handover-pill-label">
                          {step.handoverLabel}
                        </span>
                      )}
                    </div>

                    <h3 id={`step-${step.stepNumber}-title`} className="step-title">
                      {step.stepNumber}. {step.title}
                    </h3>

                    <p className="step-summary">{step.summary}</p>

                    <ul className="step-details-list">
                      {step.details.map((detail, idx) => (
                        <li key={idx}>
                          <span className="detail-bullet" aria-hidden="true">›</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {isHandover && (
                      <div className="handover-protocol-callout">
                        <span className="callout-icon" aria-hidden="true">📍</span>
                        <div className="callout-text">
                          <strong>Chain-of-Custody Checkpoint:</strong> Requires reception identity verification,
                          chilled temperature log (2°C – 4°C), and unbroken security seal registration.
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Expandable Allergen Profiles Panel */}
        <div id="exclusion-sets-panel" className="exclusion-panel-wrapper">
          <div className="exclusion-panel-card">
            <button
              type="button"
              className="exclusion-panel-toggle"
              onClick={() => onToggleExclusionPanel()}
              aria-expanded={isExclusionPanelOpen}
              aria-controls="exclusion-sets-content"
            >
              <div className="toggle-header-text">
                <span className="badge badge-subtle">Formulation Standards</span>
                <h3 className="toggle-heading">Which allergen profiles are covered?</h3>
                <p className="toggle-subtext">
                  The planned service operates six distinct exclusion sets produced in isolated kitchen sessions.
                </p>
              </div>
              <span className={`accordion-chevron ${isExclusionPanelOpen ? "is-expanded" : ""}`} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>

            {isExclusionPanelOpen && (
              <div id="exclusion-sets-content" className="exclusion-sets-body">
                <div className="exclusion-intro-note" role="note">
                  <p>
                    The proposed service checks whether a supported set covers the declared
                    profile and flags uncovered profiles at the point of order.
                  </p>
                </div>

                <div className="exclusion-sets-grid">
                  {EXCLUSION_SETS.map((set) => (
                    <div key={set.id} className="exclusion-set-item">
                      <div className="set-item-header">
                        <span className="set-id-tag">Set {set.id}</span>
                        <h4 className="set-title">{set.title}</h4>
                      </div>
                      <p className="set-summary">{set.summary}</p>
                      <p className="set-details">{set.details}</p>
                    </div>
                  ))}
                </div>

                <div className="exclusion-warning-callout" role="note">
                  <strong>Important Safety Scope:</strong> Set 6 combines all of the
                  exclusions in sets 1–5 combined. Set 6 does not cover every possible
                  allergen. Safe Travel Meal Kits Limited avoids claims of “zero risk”,
                  “guaranteed safe” or “allergen-free for everyone”. Travellers with allergens
                  outside sets 1–6 are flagged during itinerary evaluation.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
