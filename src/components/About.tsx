import React from "react";

export const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">The Origin</span>
          <h2 id="about-heading" className="section-title">
            Why the journey matters
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-insight-card">
            <h3 className="card-headline">The Broken Chain of Travel Catering</h3>
            <p className="card-body">
              A hotel chef can review the breakfast being prepared in their kitchen, but
              the same guest may eat at a conference venue that afternoon and travel
              through an airport the next morning.
            </p>
            <p className="card-body">
              In commercial hospitality, safety usually stops at the kitchen door. The
              traveller bears the burden of re-explaining their allergies at every counter,
              buffet and boardroom. The planned service connects these separate meal
              occasions through advance planning, controlled production and recorded
              handovers.
            </p>

            <div className="journey-trio-diagram" aria-label="Comparison of disconnected dining points vs connected chain of custody">
              <div className="trio-column">
                <div className="trio-circle">08:00</div>
                <div className="trio-title">Hotel Breakfast</div>
                <div className="trio-desc">Kitchen oversight ends when the guest checks out</div>
              </div>
              <div className="trio-arrow" aria-hidden="true">→</div>
              <div className="trio-column">
                <div className="trio-circle">13:00</div>
                <div className="trio-title">Conference Lunch</div>
                <div className="trio-desc">External caterer with mixed cross-contact risks</div>
              </div>
              <div className="trio-arrow" aria-hidden="true">→</div>
              <div className="trio-column">
                <div className="trio-circle">18:00</div>
                <div className="trio-title">Airport Transit</div>
                <div className="trio-desc">Limited quick-service options and unfamiliar kitchens</div>
              </div>
            </div>
            <div className="trio-caption">
              <strong>The Connected Alternative:</strong> Advance mapping, dedicated single-allergen kitchen runs, and verified handovers across all three stages.
            </div>
          </div>

          <div className="founder-profile-card">
            <div className="founder-badge-row">
              <span className="badge badge-subtle">Founder Profile</span>
              <span className="founder-role">Professional Chef &amp; Founder</span>
            </div>

            <h3 className="founder-name">Hardik Nilesh Soni</h3>

            <div className="founder-bio">
              <p>
                Hardik Nilesh Soni is a professional chef with extensive commercial kitchen
                experience in India and the United Kingdom.
              </p>
              <p>
                His UK kitchen career includes working as Chef de Partie at Premier Inn in
                Greenwich before taking a Chef de Partie role at Ibis in Southwark in April
                2024.
              </p>
              <p>
                His front-line experience of high-volume hotel breakfast service informed
                the exposure rules, breakfast-led menu architecture, kitchen clearance
                procedures and strict verification checks at venue handover points.
              </p>
            </div>

            <div className="founder-credentials">
              <h4 className="credentials-heading">Academic Qualifications</h4>
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

            <div className="employment-note" role="note">
              <small>
                * Note: Hotel names are cited solely as founder employment history. Past
                and current employers are not customers, launch partners or endorsers of
                Safe Travel Meal Kits Limited.
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
