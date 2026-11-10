import React from "react";

interface HeroProps {
  onRequestPilot: (triggerBtn: HTMLElement) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="section-container hero-container">
        <div className="hero-content">
          <div className="hero-pill-badge" role="status">
            <span className="pulse-indicator" aria-hidden="true" />
            <span className="pill-text">London Pilot Phase</span>
            <span className="pill-divider" aria-hidden="true">•</span>
            <span className="pill-scope">Central London &amp; Transit Corridors</span>
          </div>

          <h1 id="hero-heading" className="hero-title">
            Plan for the meals your journey leaves uncertain.
          </h1>

          <p className="hero-lead">
            A late arrival, a hotel buffet and a working lunch can each raise a different
            question for a traveller with food allergies. Safe Travel Meal Kits is
            developing a London service that maps those moments, plans meals around
            supported allergen profiles and traces each sealed kit from kitchen to
            handover.
          </p>

          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-primary btn-lg hero-cta-btn"
              onClick={(e) => onRequestPilot(e.currentTarget)}
            >
              <span>Request a Pilot</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </button>
            <a href="#how-it-works" className="btn btn-outline btn-lg">
              <span>See how it works</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 12l4-4-4-4" />
              </svg>
            </a>
          </div>

          <div className="hero-trust-bar">
            <div className="trust-item">
              <span className="trust-check" aria-hidden="true">✓</span>
              <span className="trust-label">Single-profile exclusive kitchen sessions</span>
            </div>
            <div className="trust-item">
              <span className="trust-check" aria-hidden="true">✓</span>
              <span className="trust-label">Hash-linked chain of custody per kit</span>
            </div>
            <div className="trust-item">
              <span className="trust-check" aria-hidden="true">✓</span>
              <span className="trust-label">Delivered chilled (2°C – 4°C) to London front desks</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-wrapper">
          <div className="hero-visual-canvas" role="region" aria-label="Visual presentation of sealed travel meal pouch beside an illustrative London itinerary">
            {/* Sealed Meal Pouch Card */}
            <div className="meal-pouch-card" role="img" aria-label="Sealed, labelled travel meal pouch with tamper-evident seal and batch label">
              <div className="pouch-header-seal">
                <div className="tamper-seal-chip">
                  <span className="seal-lock-icon" aria-hidden="true">🔒</span>
                  <span className="seal-ref tabular-nums">TAMPER-EVIDENT SEAL: #STM-8842-X</span>
                </div>
                <span className="seal-status-tag">CHILLED RELEASE</span>
              </div>

              <div className="pouch-body">
                <div className="pouch-brand-row">
                  <span className="pouch-brand-kicker">SAFE TRAVEL MEAL KITS</span>
                  <span className="pouch-run-pill tabular-nums">BATCH LON-ES2-0824</span>
                </div>

                <div className="pouch-meal-name">
                  Roasted Herb Chicken &amp; Spiced Quinoa
                </div>

                <div className="pouch-allergen-tag">
                  <div className="tag-inner">
                    <span className="tag-set-title">EXCLUSION SET 2</span>
                    <span className="tag-set-profile">Peanut, Tree Nut &amp; Sesame Excluded</span>
                  </div>
                </div>

                <div className="pouch-specs-grid">
                  <div className="pouch-spec">
                    <span className="spec-label">Environment Swab</span>
                    <span className="spec-val spec-val-success tabular-nums">Passed #SW-0418</span>
                  </div>
                  <div className="pouch-spec">
                    <span className="spec-label">Storage Window</span>
                    <span className="spec-val tabular-nums">Chilled 2°C – 4°C</span>
                  </div>
                  <div className="pouch-spec spec-full-width">
                    <span className="spec-label">Custody Hash</span>
                    <span className="spec-val font-mono hash-val">sha256:4a9c8f2...7e1b90d</span>
                  </div>
                </div>

                <div className="pouch-footer">
                  <div className="pouch-barcode" aria-hidden="true">
                    <span className="bar b-1" />
                    <span className="bar b-3" />
                    <span className="bar b-2" />
                    <span className="bar b-4" />
                    <span className="bar b-1" />
                    <span className="bar b-2" />
                    <span className="bar b-3" />
                    <span className="bar b-1" />
                    <span className="bar b-4" />
                    <span className="bar b-2" />
                    <span className="bar b-1" />
                  </div>
                  <span className="pouch-verified-stamp">VERIFIED SEALED</span>
                </div>
              </div>
            </div>

            {/* Compact London Itinerary Card */}
            <div className="hero-itinerary-card" aria-label="Illustrative London trip itinerary card">
              <div className="itinerary-card-header">
                <div className="itinerary-title-badge">
                  <span className="amber-dot-pulse" aria-hidden="true" />
                  <strong className="itinerary-header-label">Illustrative London trip</strong>
                </div>
                <span className="itinerary-summary-pill">6 Meals • 2 Handovers</span>
              </div>

              <div className="itinerary-timeline-preview">
                {/* Handover Point 1 */}
                <div className="itinerary-node handover-node">
                  <div className="node-marker amber-marker" aria-hidden="true">
                    <span>H1</span>
                  </div>
                  <div className="node-info">
                    <div className="node-header">
                      <span className="node-tag amber-tag">Handover 1</span>
                      <span className="node-time">Arrival Evening</span>
                    </div>
                    <div className="node-name">Southwark Hotel Desk</div>
                    <div className="node-sub">Duty manager intake • Chilled storage (3 meals)</div>
                  </div>
                </div>

                <div className="itinerary-connector" aria-hidden="true">
                  <div className="connector-line-dotted" />
                  <span className="connector-text">Day 1 Breakfast &amp; Transit</span>
                </div>

                {/* Handover Point 2 */}
                <div className="itinerary-node handover-node">
                  <div className="node-marker amber-marker" aria-hidden="true">
                    <span>H2</span>
                  </div>
                  <div className="node-info">
                    <div className="node-header">
                      <span className="node-tag amber-tag">Handover 2</span>
                      <span className="node-time">Day 2 Morning</span>
                    </div>
                    <div className="node-name">City Meeting Venue Reception</div>
                    <div className="node-sub">Pre-lunch intake • Departure thermal pouch (3 meals)</div>
                  </div>
                </div>
              </div>

              <div className="itinerary-card-footer">
                <span className="plan-label">Allocated Pack:</span>
                <span className="plan-name">Solo Traveller Meal Kit (£120)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
