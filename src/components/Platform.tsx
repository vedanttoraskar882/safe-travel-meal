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

        {/* Prototype Today Notice Banner */}
        <div className="prototype-status-card" role="region" aria-label="Prototype Status and Planned Capabilities">
          <div className="prototype-status-header">
            <div className="prototype-badge-group">
              <span className="badge badge-prototype">Prototype today</span>
              <span className="prototype-env-tag">Alpha Architecture v0.4</span>
            </div>
            <span className="prototype-phase-label">Demonstration Environment</span>
          </div>

          <div className="prototype-grid">
            <div className="prototype-col active-col">
              <div className="prototype-col-header">
                <span className="col-status-indicator active-indicator" aria-hidden="true" />
                <h4 className="prototype-col-title">Currently Operational in Prototype</h4>
              </div>
              <ul className="prototype-feature-list">
                <li>
                  <span className="feature-check-icon" aria-hidden="true">✓</span>
                  <span>Manual itinerary entry and trip segment mapping</span>
                </li>
                <li>
                  <span className="feature-check-icon" aria-hidden="true">✓</span>
                  <span>Fixed-rule identification of exposure windows</span>
                </li>
                <li>
                  <span className="feature-check-icon" aria-hidden="true">✓</span>
                  <span>Meal planning matched to 6 supported exclusion sets</span>
                </li>
                <li>
                  <span className="feature-check-icon" aria-hidden="true">✓</span>
                  <span>Calculated kit and subscription pricing models</span>
                </li>
                <li>
                  <span className="feature-check-icon" aria-hidden="true">✓</span>
                  <span>Test ledger records and local browser verification</span>
                </li>
              </ul>
            </div>

            <div className="prototype-col future-col">
              <div className="prototype-col-header">
                <span className="col-status-indicator planned-indicator" aria-hidden="true" />
                <h4 className="prototype-col-title">Belonging to Planned Build (Future Release)</h4>
              </div>
              <ul className="prototype-feature-list future-list">
                <li>
                  <span className="feature-future-icon" aria-hidden="true">⏳</span>
                  <span>Weighted multi-factor scoring will evaluate dynamic venue risks</span>
                </li>
                <li>
                  <span className="feature-future-icon" aria-hidden="true">⏳</span>
                  <span>Automated production scheduling will manage blast-freeze cycles</span>
                </li>
                <li>
                  <span className="feature-future-icon" aria-hidden="true">⏳</span>
                  <span>A production ledger with export and verification will authenticate live batches</span>
                </li>
                <li>
                  <span className="feature-future-icon" aria-hidden="true">⏳</span>
                  <span>Phone-based handover capture will record front desk intake and seal scans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Three Planned Software Components */}
        <div className="platform-components-grid">
          {/* Component A */}
          <div className="platform-card">
            <div className="platform-card-header">
              <span className="component-kicker">Component A</span>
              <h3 className="platform-card-title">Exposure engine</h3>
              <p className="platform-card-quote">“Find the meal occasions that need attention”</p>
            </div>

            <div className="platform-card-body">
              <p>
                The proposed engine maps flights, hotel stays, meetings and events onto a
                timeline. It assesses each meal occasion using five key factors:
              </p>

              <ol className="factors-list">
                <li>
                  <strong>Venue type:</strong> In-room, banqueting hall, transit terminal
                </li>
                <li>
                  <strong>Service style:</strong> Plated, buffet, unvetted working lunch
                </li>
                <li>
                  <strong>Transit and timing:</strong> Buffer periods and departure transfers
                </li>
                <li>
                  <strong>Declared allergen profile:</strong> Sensitivity threshold vs room risk
                </li>
                <li>
                  <strong>Likelihood of itinerary change:</strong> Delay vulnerability
                </li>
              </ol>

              <p>
                An occasion above the relevant threshold becomes an <strong>“exposure window”</strong>.
                The traveller can accept or remove it. The planned engine can reassess
                affected occasions when a journey changes.
              </p>
            </div>

            <div className="simulated-chip-panel" aria-label="Simulated exposure output">
              <div className="simulated-chip-header">
                <span className="sim-chip-tag">Simulated Assessment Output</span>
              </div>
              <div className="simulated-metric-line">
                <span className="sim-lbl">Day 2 Working Lunch:</span>
                <span className="sim-status danger-pill">Exposure Window Flagged</span>
              </div>
              <p className="sim-caption">
                Unvetted corporate buffet detected • Risk score exceeds safety threshold
              </p>
            </div>
          </div>

          {/* Component B */}
          <div className="platform-card">
            <div className="platform-card-header">
              <span className="component-kicker">Component B</span>
              <h3 className="platform-card-title">Run scheduler</h3>
              <p className="platform-card-quote">“Match accepted meals to checked stock”</p>
            </div>

            <div className="platform-card-body">
              <p>
                Each production run serves one defined allergen exclusion set.
              </p>
              <p>
                In the planned process, meals are cooked in an exclusive-use kitchen
                session, blast-frozen, sealed, labelled and held as stock for that set.
              </p>
              <p>
                The scheduler is designed to check stock, lead time, clearance between
                runs and handover feasibility. Kits are released chilled. A window that
                cannot be fulfilled should be flagged before confirmation.
              </p>
            </div>

            <div className="simulated-chip-panel" aria-label="Simulated run scheduler check">
              <div className="simulated-chip-header">
                <span className="sim-chip-tag">Simulated Scheduling Check</span>
              </div>
              <div className="simulated-metric-line">
                <span className="sim-lbl">Batch LON-ES2-0824:</span>
                <span className="sim-status success-pill">Stock &amp; Swab Verified</span>
              </div>
              <p className="sim-caption">
                Exclusion Set 2 verified inventory allocated • Courier window locked
              </p>
            </div>
          </div>

          {/* Component C */}
          <div className="platform-card">
            <div className="platform-card-header">
              <span className="component-kicker">Component C</span>
              <h3 className="platform-card-title">Chain-of-custody ledger</h3>
              <p className="platform-card-quote">“Follow a kit from its run to its recipient”</p>
            </div>

            <div className="platform-card-body">
              <p>
                The planned record connects each kit to its production run, exclusion set,
                seal number, handling events, timestamps and locations.
              </p>
              <p>
                It links to supplier declarations, clearance swab references and release
                checks. In public copy, this operates as a <strong>hash-linked record</strong>:
                each entry references the previous entry through a hash.
              </p>
              <p>
                A correction adds a new entry and preserves the earlier entry. A broken
                seal or temperature exception becomes visible in the record.
              </p>
            </div>

            <div className="simulated-chip-panel" aria-label="Simulated ledger entry">
              <div className="simulated-chip-header">
                <span className="sim-chip-tag">Simulated Hash-Linked Entry</span>
              </div>
              <div className="sim-hash-row">
                <span className="hash-label">Prev Hash:</span>
                <span className="hash-code font-mono">0a7f4...c902</span>
              </div>
              <div className="sim-hash-row">
                <span className="hash-label">This Hash:</span>
                <span className="hash-code font-mono">8e2d1...b47a</span>
              </div>
              <p className="sim-caption">
                Event: Hotel Desk Intake • Seal #STM-8842-X Intact • Chilled 3.2°C
              </p>
            </div>
          </div>
        </div>

        {/* Foundation Rule Base: Journey Allergen Assurance Protocol */}
        <div className="foundation-protocol-box">
          <div className="protocol-header">
            <span className="protocol-eyebrow">Foundation Architecture</span>
            <h3 className="protocol-title">
              Journey Allergen Assurance Protocol
            </h3>
            <p className="protocol-subtitle">
              The shared, versioned operational rule base underlying all three software components.
            </p>
          </div>

          <div className="protocol-rules-grid">
            <div className="protocol-rule-item">
              <span className="rule-step-num">01. Sanitation</span>
              <h4>Signed Clearance &amp; Deep Cleaning</h4>
              <p>Signed clearance and deep cleaning between sets to prevent airborne and surface cross-contact.</p>
            </div>

            <div className="protocol-rule-item">
              <span className="rule-step-num">02. Segregation</span>
              <h4>Dedicated Colour-Controlled Equipment</h4>
              <p>Colour-segregated kitchen utensils, chopping blocks, cookware and sealing gear dedicated strictly per set.</p>
            </div>

            <div className="protocol-rule-item">
              <span className="rule-step-num">03. Verification</span>
              <h4>Pre-Run Verification Swabs</h4>
              <p>Surface and equipment verification swabs performed and recorded before ingredients enter the workspace.</p>
            </div>

            <div className="protocol-rule-item">
              <span className="rule-step-num">04. Traceability</span>
              <h4>Batch-Level Ingredient Checks</h4>
              <p>Supplier declaration verification and raw ingredient batch certificates validated prior to session clearance.</p>
            </div>

            <div className="protocol-rule-item">
              <span className="rule-step-num">05. Security</span>
              <h4>Tamper-Evident Sealing</h4>
              <p>Individually serialized tamper-evident security bands sealed onto each kit immediately following chilled blast.</p>
            </div>

            <div className="protocol-rule-item">
              <span className="rule-step-num">06. Venues</span>
              <h4>Written Acceptance by Receiving Venues</h4>
              <p>Written acceptance of storage (2°C – 4°C) and release conditions by hotel and venue duty managers upon intake.</p>
            </div>
          </div>

          <div className="protocol-footer">
            <div className="protocol-version-note">
              <strong>Version Control:</strong> Protocol v2.1-UK (Adopted 14 Oct 2024 • Revisions include updated swab thresholds for sesame derivatives)
            </div>
            <div className="protocol-safety-disclaimer">
              <em>Safety Note:</em> While the hash-linked record verifies procedural adherence, a digital record does not prove the absolute absence of an allergen.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
