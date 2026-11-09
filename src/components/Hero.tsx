import React from "react";

interface HeroProps {
  onRequestPilot: (triggerBtn: HTMLElement) => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="section-container hero-container">
        <div className="hero-content">
          <div className="pilot-tag-row">
            <span className="pilot-stage-pill">
              <span className="pulse-dot" aria-hidden="true" />
              London Pilot Phase
            </span>
            <span className="service-scope-text">Central London &amp; Key Transit</span>
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
              className="btn btn-primary btn-lg"
              onClick={(e) => onRequestPilot(e.currentTarget)}
            >
              Request a Pilot
            </button>
            <a href="#how-it-works" className="btn btn-outline btn-lg">
              See how it works
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
                <path d="M6 12l4-4-4-4" />
              </svg>
            </a>
          </div>

          <div className="hero-micro-points">
            <div className="micro-point">
              <span className="micro-icon" aria-hidden="true">✓</span>
              <span>Dedicated single-profile kitchen sessions</span>
            </div>
            <div className="micro-point">
              <span className="micro-icon" aria-hidden="true">✓</span>
              <span>Tamper-evident hash-linked chain of custody</span>
            </div>
            <div className="micro-point">
              <span className="micro-icon" aria-hidden="true">✓</span>
              <span>Delivered chilled to London front desks &amp; venues</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Visual presentation of sealed travel meal pouch beside an illustrative London itinerary">
          <div className="hero-composite">
            {/* Sealed Meal Pouch Graphic */}
            <div className="meal-pouch-card" role="img" aria-label="Sealed, labelled travel meal pouch with tamper-evident seal and batch label">
              <div className="pouch-header-seal">
                <div className="tamper-evident-strip">
                  <span className="tamper-icon" aria-hidden="true">🔒</span>
                  <span className="tamper-code">TAMPER-EVIDENT SEAL: #STM-8842-X</span>
                </div>
              </div>
              <div className="pouch-body">
                <div className="pouch-brand-badge">SAFE TRAVEL MEAL KITS</div>
                <div className="pouch-meal-name">Roasted Herb Chicken &amp; Spiced Quinoa</div>
                <div className="pouch-allergen-tag">
                  <span className="tag-label">ALLERGEN EXCLUSION SET 2</span>
                  <span className="tag-desc">Peanut, Tree Nut &amp; Sesame Free</span>
                </div>
                <div className="pouch-specs-grid">
                  <div className="pouch-spec">
                    <span className="spec-label">Production Batch</span>
                    <span className="spec-val">LON-ES2-0824</span>
                  </div>
                  <div className="pouch-spec">
                    <span className="spec-label">Environment Swab</span>
                    <span className="spec-val">Passed #SW-0418</span>
                  </div>
                  <div className="pouch-spec">
                    <span className="spec-label">Storage Window</span>
                    <span className="spec-val">Chilled 2°C – 4°C</span>
                  </div>
                  <div className="pouch-spec">
                    <span className="spec-label">Ledger Hash</span>
                    <span className="spec-val font-mono">sha256:4a9c...7e1b</span>
                  </div>
                </div>
                <div className="pouch-footer">
                  <div className="pouch-barcode" aria-hidden="true">
                    <div className="barcode-line w-1" />
                    <div className="barcode-line w-3" />
                    <div className="barcode-line w-2" />
                    <div className="barcode-line w-4" />
                    <div className="barcode-line w-1" />
                    <div className="barcode-line w-2" />
                    <div className="barcode-line w-3" />
                    <div className="barcode-line w-1" />
                    <div className="barcode-line w-4" />
                  </div>
                  <span className="pouch-status-stamp">RELEASED CHILLED</span>
                </div>
              </div>
            </div>

            {/* Compact London Itinerary Card */}
            <div className="hero-itinerary-card" aria-label="Illustrative London trip itinerary card">
              <div className="itinerary-card-header">
                <div className="itinerary-title-badge">
                  <span className="badge-bullet" aria-hidden="true" />
                  <strong>Illustrative London trip</strong>
                </div>
                <span className="itinerary-summary-pill">6 Meals • 2 Handovers</span>
              </div>

              <div className="itinerary-timeline-preview">
                {/* Handover 1 */}
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
                  <div className="connector-line" />
                  <span className="connector-text">Day 1 Breakfast &amp; Transit</span>
                </div>

                {/* Handover 2 */}
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
                <span className="plan-label">Plan matched:</span>
                <span className="plan-name">Solo Traveller Meal Kit (£120)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
