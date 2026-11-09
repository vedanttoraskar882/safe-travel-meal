import React from "react";

export const Platform: React.FC = () => {
  return (
    <section id="platform" className="platform-section" aria-labelledby="platform-heading">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Architecture &amp; Protocol</span>
          <h2 id="platform-heading" className="section-title">
            Journey Allergen Assurance Platform
          </h2>
          <p className="section-lead">
            Three planned software components operating under one versioned rule base,
            connecting flight times, hotel desks and kitchen batches into a single
            verified chain of custody.
          </p>
        </div>

        {/* Prototype Today Notice */}
        <div className="prototype-status-card" role="region" aria-label="Prototype Status and Planned Capabilities">
          <div className="prototype-status-header">
            <span className="badge badge-prototype">Prototype today</span>
            <span className="prototype-date">Version 0.4 • Alpha Architecture</span>
          </div>
          <div className="prototype-grid">
            <div className="prototype-col">
              <h4 className="prototype-col-title">Currently Operational in Prototype</h4>
              <ul className="prototype-feature-list">
                <li><span className="tick-icon">✓</span> Manual itinerary entry and trip segment mapping</li>
                <li><span className="tick-icon">✓</span> Fixed-rule identification of exposure windows</li>
                <li><span className="tick-icon">✓</span> Structured meal planning across 6 exclusion profiles</li>
                <li><span className="tick-icon">✓</span> Formulaic package pricing calculations</li>
                <li><span className="tick-icon">✓</span> Test ledger entries and mock hash generation</li>
              </ul>
            </div>
            <div className="prototype-col">
              <h4 className="prototype-col-title">Belonging to Planned Build (Future Release)</h4>
              <ul className="prototype-feature-list future-list">
                <li><span className="future-icon">⏳</span> Weighted multi-factor scoring will evaluate live venue risks</li>
                <li><span className="future-icon">⏳</span> Automated production scheduling will coordinate blast-freeze runs</li>
                <li><span className="future-icon">⏳</span> A production ledger with cryptographically verifiable export will track live batches</li>
                <li><span className="future-icon">⏳</span> Phone-based handover capture will record venue desk signatures and seal integrity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Three Planned Software Components */}
        <div className="platform-components-grid">
          {/* Component A */}
          <div className="platform-card">
            <div className="platform-card-header">
              <span className="component-number">Component A</span>
              <h3 className="platform-card-title">Exposure engine</h3>
              <p className="platform-card-tagline">“Find the meal occasions that need attention”</p>
            </div>
            <div className="platform-card-content">
              <p>
                The proposed engine maps flights, hotel stays, meetings and events onto a
                continuous timeline. It assesses each meal occasion using five key factors:
              </p>
              <ol className="factors-list">
                <li><strong>Venue type:</strong> In-room, banqueting hall, transit terminal</li>
                <li><strong>Service style:</strong> Plated, buffet, unvetted working lunch</li>
                <li><strong>Transit and timing:</strong> Buffer periods and departure transfers</li>
                <li><strong>Declared allergen profile:</strong> Sensitivity threshold vs room risk</li>
                <li><strong>Likelihood of itinerary change:</strong> Delay vulnerability</li>
              </ol>
              <p>
                An occasion above the relevant threshold becomes an <strong>“exposure window”</strong>.
                The traveller can review, accept or remove it. When a journey changes, the
                planned engine will reassess all affected occasions automatically.
              </p>
            </div>
            <div className="simulated-preview">
              <div className="simulated-tag">Simulated Assessment Output</div>
              <div className="simulated-metric">
                <span className="sim-lbl">Day 2 Working Lunch:</span>
                <span className="sim-val danger">Exposure Window Identified (Score 4.2 / 5.0)</span>
              </div>
              <div className="simulated-sub">Unvetted buffet catering detected • Recommend kit allocation</div>
            </div>
          </div>

          {/* Component B */}
          <div className="platform-card">
            <div className="platform-card-header">
              <span className="component-number">Component B</span>
              <h3 className="platform-card-title">Run scheduler</h3>
              <p className="platform-card-tagline">“Match accepted meals to checked stock”</p>
            </div>
            <div className="platform-card-content">
              <p>
                Each production run serves exactly one defined allergen exclusion set.
              </p>
              <p>
                In the planned process, meals are cooked in an exclusive-use kitchen
                session, blast-frozen, sealed, labelled and held as verified stock for
                that set.
              </p>
              <p>
                The scheduler is designed to check stock availability, required lead times,
                mandatory cleaning and swab clearance between runs, and handover courier
                feasibility. Kits are released chilled. A window that cannot be fulfilled
                is flagged before confirmation.
              </p>
            </div>
            <div className="simulated-preview">
              <div className="simulated-tag">Simulated Scheduling Check</div>
              <div className="simulated-metric">
                <span className="sim-lbl">Run Slot Lon-B2:</span>
                <span className="sim-val success">Stock Available • Clearance Swab Verified</span>
              </div>
              <div className="simulated-sub">Exclusion Set 2 stock allocated • Courier handover window locked</div>
            </div>
          </div>

          {/* Component C */}
          <div className="platform-card">
            <div className="platform-card-header">
              <span className="component-number">Component C</span>
              <h3 className="platform-card-title">Chain-of-custody ledger</h3>
              <p className="platform-card-tagline">“Follow a kit from its run to its recipient”</p>
            </div>
            <div className="platform-card-content">
              <p>
                The planned record connects each individual kit to its production run,
                exclusion set, tamper-evident seal number, handling events, timestamps and
                geographic locations.
              </p>
              <p>
                It links to supplier declarations, kitchen clearance swab references and
                release checks. In our public copy, this is a <strong>hash-linked record</strong>:
                each entry cryptographically references the previous entry through a hash.
              </p>
              <p>
                A correction adds a new timestamped entry while strictly preserving the
                earlier entry. Any broken seal or temperature exception becomes immediately
                visible in the record.
              </p>
            </div>
            <div className="simulated-preview">
              <div className="simulated-tag">Simulated Hash-Linked Entry</div>
              <div className="simulated-metric">
                <span className="sim-lbl">Prev Hash:</span>
                <span className="sim-val font-mono">0a7f4...c902</span>
              </div>
              <div className="simulated-metric">
                <span className="sim-lbl">This Hash:</span>
                <span className="sim-val font-mono">8e2d1...b47a</span>
              </div>
              <div className="simulated-sub">Event: Hotel Desk Intake • Seal Intact • 3.2°C</div>
            </div>
          </div>
        </div>

        {/* Foundation Rule Base: Journey Allergen Assurance Protocol */}
        <div className="foundation-protocol-box">
          <div className="protocol-header">
            <div className="protocol-eyebrow">Foundational Layer</div>
            <h3 className="protocol-title">
              Journey Allergen Assurance Protocol
            </h3>
            <p className="protocol-subtitle">
              The shared versioned rule base underlying all three software components.
            </p>
          </div>

          <div className="protocol-rules-grid">
            <div className="protocol-rule-item">
              <div className="rule-badge">01. Sanitation</div>
              <h4>Signed Clearance &amp; Deep Cleaning</h4>
              <p>Full room washdown and documented clearance before any allergen exclusion session begins.</p>
            </div>
            <div className="protocol-rule-item">
              <div className="rule-badge">02. Equipment</div>
              <h4>Dedicated Colour-Controlled Tools</h4>
              <p>Colour-segregated prep equipment, cookware, and vacuum sealing units strictly isolated per set.</p>
            </div>
            <div className="protocol-rule-item">
              <div className="rule-badge">03. Verification</div>
              <h4>Pre-Run Verification Swabs</h4>
              <p>Rapid lateral flow and ATP swab checks executed and logged before ingredient unpacking.</p>
            </div>
            <div className="protocol-rule-item">
              <div className="rule-badge">04. Ingredients</div>
              <h4>Batch-Level Ingredient Checks</h4>
              <p>Formal supplier declaration reviews and batch tracking for each individual raw ingredient.</p>
            </div>
            <div className="protocol-rule-item">
              <div className="rule-badge">05. Security</div>
              <h4>Tamper-Evident Sealing</h4>
              <p>Serialized, numbered tamper-evident bands applied immediately following chilled release.</p>
            </div>
            <div className="protocol-rule-item">
              <div className="rule-badge">06. Venues</div>
              <h4>Written Venue Acceptance</h4>
              <p>Hotel and venue duty staff sign written acceptance of chilled storage conditions (2°C – 4°C).</p>
            </div>
          </div>

          <div className="protocol-footer">
            <div className="version-tag">
              <strong>Version Control:</strong> Protocol v2.1-UK (Adopted 14 Oct 2024 • Revisions include updated swab thresholds for sesame derivatives)
            </div>
            <div className="safety-disclaimer">
              <em>Note:</em> A digital hash-linked record verifies handling adherence and chain of custody; it does not constitute a biological guarantee against every conceivable trace allergen.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
