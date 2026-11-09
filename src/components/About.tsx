import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">The Origin &amp; The Problem</span>
          <h2 id="about-heading" className="section-title">
            Why the journey matters
          </h2>
          <p className="section-lead">
            In commercial travel catering, allergy protection breaks down when travellers move between venues.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Insight & Journey Anatomy */}
          <div className="about-insight-card">
            <div className="insight-badge-row">
              <span className="badge badge-accent">The Disconnected Chain</span>
            </div>

            <h3 className="card-headline">Safety shouldn’t stop at the kitchen door.</h3>

            <p className="card-body">
              A hotel chef can review the breakfast being prepared in their kitchen, but
              the same guest may eat at a conference venue that afternoon and travel
              through an airport the next morning.
            </p>

            <p className="card-body">
              Today, each meal occasion is treated as an isolated risk. The traveller
              bears the burden of re-explaining severe allergies at every desk, counter,
              buffet, and boardroom. The planned service connects these separate meal
              occasions through advance planning, controlled production and recorded
              handovers.
            </p>

            {/* Journey Trio Visual Diagram */}
            <div className="journey-trio-diagram" aria-label="Timeline of travel meal occasions: Breakfast, Conference, Airport">
              <div className="trio-stage">
                <div className="trio-time-badge">08:00</div>
                <div className="trio-stage-title">Hotel Breakfast</div>
                <p className="trio-stage-desc">
                  Chef oversight ends the moment the guest checks out of the room.
                </p>
              </div>

              <div className="trio-connector" aria-hidden="true">
                <span className="connector-arrow">→</span>
              </div>

              <div className="trio-stage">
                <div className="trio-time-badge">13:00</div>
                <div className="trio-stage-title">Conference Lunch</div>
                <p className="trio-stage-desc">
                  External catering staff often lack batch-level allergen provenance.
                </p>
              </div>

              <div className="trio-connector" aria-hidden="true">
                <span className="connector-arrow">→</span>
              </div>

              <div className="trio-stage">
                <div className="trio-time-badge">18:00</div>
                <div className="trio-stage-title">Airport Transit</div>
                <p className="trio-stage-desc">
                  High-turnover terminal food outlets with high cross-contact vulnerability.
                </p>
              </div>
            </div>

            <div className="trio-footer-callout">
              <span className="trio-check-icon" aria-hidden="true">✓</span>
              <span>
                <strong>The Planned Service Model:</strong> Replaces isolated kitchen inquiries with one continuous, verified allergen assurance pathway.
              </span>
            </div>
          </div>

          {/* Right Column: Founder Dossier */}
          <div className="founder-profile-card">
            <div className="founder-badge-row">
              <span className="badge badge-subtle">Founder Profile</span>
              <span className="founder-profession">Commercial Kitchen Veteran</span>
            </div>

            <h3 className="founder-name">Hardik Nilesh Soni</h3>
            <div className="founder-title-role">Founder, Safe Travel Meal Kits Limited</div>

            <div className="founder-bio">
              <p>
                Hardik Nilesh Soni, Founder, is a professional chef with extensive commercial
                kitchen experience in India and the UK.
              </p>
              <p>
                He worked as Chef de Partie at Premier Inn in Greenwich before taking a Chef
                de Partie role at Ibis in Southwark in April 2024.
              </p>
              <p>
                His experience of hotel breakfast service informed the exposure rules,
                breakfast-led menu, kitchen clearance procedures and checks at venue
                handover.
              </p>
            </div>

            <div className="founder-credentials-box">
              <h4 className="credentials-heading">Academic &amp; Management Background</h4>
              <ul className="credentials-list">
                <li>
                  <span className="cred-bullet" aria-hidden="true">•</span>
                  <span>
                    <strong>MSc in Science Management</strong> with Professional Development
                    and Planning, BPP University
                  </span>
                </li>
                <li>
                  <span className="cred-bullet" aria-hidden="true">•</span>
                  <span>
                    <strong>Bachelor’s Degree in Hospitality &amp; Tourism Management</strong>,
                    Sardar Patel University
                  </span>
                </li>
              </ul>
            </div>

            <div className="employment-disclaimer-note" role="note">
              <p>
                <em>Employment Note:</em> Hotel names are cited solely as founder employment
                history. Former and current employers are not customers, launch partners or
                endorsers of Safe Travel Meal Kits Limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
