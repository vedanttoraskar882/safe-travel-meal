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

    if (typeof window.matchMedia === "function") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setHasAnimated(true);
        return;
      }
    }

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
        { threshold: 0.12 }
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
            (Exclusion Set 2) through a two-day Southwark hotel stay and City meeting schedule.
          </p>
        </div>

        {/* Visual Distinction: 6 Meals vs 2 Handovers */}
        <div className="meals-vs-handovers-banner" role="region" aria-label="Visual distinction between six meals and two handovers">
          <div className="mvsh-card mvsh-meals-card">
            <div className="mvsh-icon-badge" aria-hidden="true">🍱</div>
            <div className="mvsh-text-group">
              <span className="mvsh-stat-value tabular-nums">6 Meals Planned</span>
              <span className="mvsh-stat-label">Accepted exposure windows across 48 hours</span>
            </div>
          </div>

          <div className="mvsh-connector-pill" aria-hidden="true">
            <span>Delivered In</span>
          </div>

          <div className="mvsh-card mvsh-handovers-card">
            <div className="mvsh-icon-badge amber-badge" aria-hidden="true">🤝</div>
            <div className="mvsh-text-group">
              <span className="mvsh-stat-value amber-text tabular-nums">2 Physical Handovers</span>
              <span className="mvsh-stat-label">Handover 1 (Southwark Hotel) • Handover 2 (City Venue)</span>
            </div>
          </div>
        </div>

        {/* Vertical Worked London Itinerary */}
        <div
          ref={itineraryRef}
          className={`vertical-itinerary-container ${hasAnimated ? "is-animated" : ""}`}
        >
          {/* Connecting route line */}
          <div className="itinerary-route-track" aria-hidden="true">
            <div className="itinerary-route-progress" />
          </div>

          <div className="itinerary-steps-list">
            {LONDON_ITINERARY_STEPS.map((step) => {
              const isHandover = step.isHandover;

              return (
                <article
                  key={step.stepNumber}
                  className={`itinerary-step-card ${isHandover ? "step-handover-card" : ""}`}
                  aria-labelledby={`step-${step.stepNumber}-title`}
                >
                  <div className="step-marker-col">
                    <div className={`step-circle-indicator ${isHandover ? "amber-circle-indicator" : ""}`}>
                      {isHandover ? (
                        <span className="handover-num-badge">H{step.stepNumber === 4 ? "1" : "2"}</span>
                      ) : (
                        <span className="step-num-badge">{step.stepNumber}</span>
                      )}
                    </div>
                  </div>

                  <div className="step-content-col">
                    <div className="step-badge-row">
                      <span className={`step-pill ${isHandover ? "pill-handover" : "pill-standard"}`}>
                        {step.badge}
                      </span>
                      {isHandover && (
                        <span className="handover-geo-label">
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
                          <span className="detail-arrow" aria-hidden="true">›</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {isHandover && (
                      <div className="handover-callout-strip">
                        <span className="callout-pin" aria-hidden="true">📍</span>
                        <div className="callout-msg">
                          <strong>Chain-of-Custody Checkpoint:</strong> Verification of unbroken security seal,
                          chilled temperature log (2°C – 4°C), and intake sign-off recorded.
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
              <div className="toggle-info-group">
                <span className="badge badge-subtle">Formulation Standards</span>
                <h3 className="toggle-heading">Which allergen profiles are covered?</h3>
                <p className="toggle-subtext">
                  The planned service operates six distinct exclusion sets produced in isolated kitchen sessions.
                </p>
              </div>

              <span className={`toggle-chevron-icon ${isExclusionPanelOpen ? "is-expanded" : ""}`} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
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
                      <div className="set-header-row">
                        <span className="set-pill-tag">Set {set.id}</span>
                        <h4 className="set-title">{set.title}</h4>
                      </div>
                      <p className="set-summary">{set.summary}</p>
                      <p className="set-details">{set.details}</p>
                    </div>
                  ))}
                </div>

                <div className="exclusion-safety-banner" role="note">
                  <strong>Important Scope Clarification:</strong> Set 6 combines all of the
                  exclusions in sets 1–5 combined. Never describe set 6 as covering every
                  possible allergen. Avoid “zero risk”, “guaranteed safe” and “allergen-free
                  for everyone”. Travellers with profiles not covered by sets 1–6 are flagged
                  during order evaluation.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
