import React from "react";
import { PRICING_PRODUCTS } from "../data/pricing";

interface PricingProps {
  onRequestPilot: (triggerBtn: HTMLElement) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onRequestPilot }) => {
  return (
    <section id="pricing" className="pricing-section" aria-labelledby="pricing-heading">
      <div className="section-container">
        <div className="section-header">
          <span className="section-eyebrow">Pilot Tiering &amp; Tariffs</span>
          <h2 id="pricing-heading" className="section-title">
            Meal kits and pricing for the London pilot
          </h2>
          <p className="section-lead">
            Indicative pilot pricing referenced in our initial pilot-interest letters,
            tailored for London journeys across individual, group and employer travel.
          </p>
        </div>

        {/* Intended Users & Service Area Scope */}
        <div className="pricing-context-grid">
          <div className="context-card">
            <h3 className="context-title">Intended Users</h3>
            <ul className="context-bullets">
              <li><strong>Individual Travellers:</strong> Independent business or leisure visitors managing verified allergies.</li>
              <li><strong>Families &amp; Groups:</strong> Coordinated bookings requiring shared exclusion verification.</li>
              <li><strong>Frequent Travellers:</strong> Regular London commuters or recurring international guests.</li>
              <li><strong>Employers &amp; Corporate Teams:</strong> Companies arranging duty-of-care team travel and offsites.</li>
            </ul>
          </div>
          <div className="context-card">
            <h3 className="context-title">Pilot Channels &amp; Geographic Area</h3>
            <p className="context-body">
              Hotels, corporate venues and travel management agencies are potential pilot
              participants or distribution channels.
            </p>
            <div className="service-area-callout">
              <span className="geo-pin" aria-hidden="true">📍</span>
              <div>
                <strong>Initial Planned Service Area:</strong> Greater London hotels,
                meeting venues, and London airports (Heathrow, City, Gatwick transit
                corridors).
              </div>
            </div>
            <p className="context-subnote">
              Note: The pilot phase focuses strictly on the London territory; nationwide delivery is not offered at this stage.
            </p>
          </div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="pricing-table-desktop-wrapper" role="region" aria-label="Meal kits comparison table">
          <table className="pricing-table">
            <thead>
              <tr>
                <th scope="col" className="th-product">Product</th>
                <th scope="col" className="th-price">Price</th>
                <th scope="col" className="th-meals">Meals</th>
                <th scope="col" className="th-handovers">Handovers</th>
                <th scope="col" className="th-desc">Description</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_PRODUCTS.map((prod) => (
                <tr key={prod.id} className="pricing-row">
                  <td className="td-product">
                    <span className="product-name">{prod.name}</span>
                    {prod.note && (
                      <span className="product-inline-note">{prod.note}</span>
                    )}
                  </td>
                  <td className="td-price tabular-nums">
                    <span className="price-amount">{prod.price}</span>
                  </td>
                  <td className="td-meals tabular-nums">
                    <span className="cell-metric">{prod.meals}</span>
                    <span className="cell-metric-unit"> {prod.meals === 1 ? "meal" : "meals"}</span>
                  </td>
                  <td className="td-handovers tabular-nums">
                    <span className="cell-metric amber-text">{prod.handovers}</span>
                    <span className="cell-metric-unit"> {prod.handovers === 1 ? "handover" : "handovers"}</span>
                  </td>
                  <td className="td-desc">
                    <span>{prod.description}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Pricing Cards */}
        <div className="pricing-cards-mobile" role="region" aria-label="Meal kits stacked pricing">
          {PRICING_PRODUCTS.map((prod) => (
            <article key={prod.id} className="mobile-price-card">
              <div className="mobile-card-top">
                <h3 className="mobile-product-name">{prod.name}</h3>
                <div className="mobile-price-value tabular-nums">{prod.price}</div>
              </div>

              <p className="mobile-product-desc">{prod.description}</p>

              <div className="mobile-specs-row">
                <div className="mobile-spec-item">
                  <span className="spec-item-label">Meals</span>
                  <span className="spec-item-val tabular-nums">
                    {prod.meals} {prod.meals === 1 ? "Meal" : "Meals"}
                  </span>
                </div>
                <div className="mobile-spec-item amber-spec">
                  <span className="spec-item-label">Handovers</span>
                  <span className="spec-item-val tabular-nums">
                    {prod.handovers} {prod.handovers === 1 ? "Handover" : "Handovers"}
                  </span>
                </div>
              </div>

              {prod.note && (
                <div className="mobile-card-note">
                  <span className="note-icon" aria-hidden="true">ℹ</span>
                  <span>{prod.note}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Employer Account Setup Note */}
        <div className="pricing-bottom-notice" role="note">
          <p>
            Employer accounts have a £250 set-up fee. All meal kit figures represent
            indicative pilot tariffs per kit or subscription period.
          </p>
        </div>

        {/* Single Request a Pilot Button */}
        <div className="pricing-cta-container">
          <div className="cta-inner-card">
            <div className="cta-copy">
              <h3 className="cta-heading">Interested in participating in our London pilot?</h3>
              <p className="cta-subtext">
                We are currently reviewing candidate hotels, venues, and frequent traveller groups.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={(e) => onRequestPilot(e.currentTarget)}
            >
              Request a Pilot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
