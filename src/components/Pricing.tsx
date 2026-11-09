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
            Product prices indicated in the business plan’s pilot-interest letters,
            tailored for London journeys across individual, group and employer travel.
          </p>
        </div>

        {/* Intended Users & Geographic Reach */}
        <div className="pricing-context-grid">
          <div className="context-card">
            <h3 className="context-title">Intended Users</h3>
            <ul className="context-bullets">
              <li>
                <strong>Individual Travellers:</strong> Independent business or leisure visitors managing verified allergies.
              </li>
              <li>
                <strong>Families &amp; Groups:</strong> Coordinated bookings requiring shared exclusion verification.
              </li>
              <li>
                <strong>Frequent Travellers:</strong> Regular London commuters or recurring international guests.
              </li>
              <li>
                <strong>Employers Arranging Team Travel:</strong> Companies coordinating duty-of-care team itineraries.
              </li>
            </ul>
          </div>

          <div className="context-card">
            <h3 className="context-title">Pilot Channels &amp; Service Area</h3>
            <p className="context-body">
              Hotels, venues and travel agencies are potential pilot participants or distribution channels.
            </p>
            <div className="service-area-callout">
              <span className="geo-icon" aria-hidden="true">📍</span>
              <div className="service-area-text">
                <strong>Initial Planned Service Area:</strong> London hotels, venues,
                and London airports (Heathrow, City, Gatwick transit corridors).
              </div>
            </div>
            <p className="context-note-fine">
              Note: The pilot phase focuses exclusively on the London service area; nationwide delivery is not offered at this stage.
            </p>
          </div>
        </div>

        {/* Desktop Comparison Table */}
        <div className="pricing-table-wrapper" role="region" aria-label="Meal kits and pricing comparison table">
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
                    <span className="product-name-text">{prod.name}</span>
                    {prod.note && (
                      <span className="product-inline-fee-note">{prod.note}</span>
                    )}
                  </td>
                  <td className="td-price tabular-nums">
                    <span className="price-tag-value">{prod.price}</span>
                  </td>
                  <td className="td-meals tabular-nums">
                    <span className="metric-figure">{prod.meals}</span>
                    <span className="metric-unit"> {prod.meals === 1 ? "meal" : "meals"}</span>
                  </td>
                  <td className="td-handovers tabular-nums">
                    <span className="metric-figure amber-metric">{prod.handovers}</span>
                    <span className="metric-unit"> {prod.handovers === 1 ? "handover" : "handovers"}</span>
                  </td>
                  <td className="td-desc">
                    <span className="desc-copy">{prod.description}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Pricing Cards */}
        <div className="pricing-cards-mobile" role="region" aria-label="Meal kits stacked pricing">
          {PRICING_PRODUCTS.map((prod) => (
            <article key={prod.id} className="mobile-pricing-card">
              <div className="mobile-card-top">
                <h3 className="mobile-product-title">{prod.name}</h3>
                <div className="mobile-price-badge tabular-nums">{prod.price}</div>
              </div>

              <p className="mobile-product-desc">{prod.description}</p>

              <div className="mobile-meta-grid">
                <div className="mobile-meta-cell">
                  <span className="meta-cell-label">Meals</span>
                  <span className="meta-cell-val tabular-nums">
                    {prod.meals} {prod.meals === 1 ? "Meal" : "Meals"}
                  </span>
                </div>
                <div className="mobile-meta-cell amber-cell">
                  <span className="meta-cell-label">Handovers</span>
                  <span className="meta-cell-val tabular-nums">
                    {prod.handovers} {prod.handovers === 1 ? "Handover" : "Handovers"}
                  </span>
                </div>
              </div>

              {prod.note && (
                <div className="mobile-note-callout">
                  <span className="note-symbol" aria-hidden="true">ℹ</span>
                  <span>{prod.note}</span>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Employer Setup Fee Notice */}
        <div className="pricing-subnote-box" role="note">
          <p>
            Employer accounts have a £250 set-up fee. All indicated tariffs reflect pilot-stage commercial models.
          </p>
        </div>

        {/* Single Call to Action Button */}
        <div className="pricing-action-card">
          <div className="action-card-text">
            <h3 className="action-card-heading">Register for pilot meal kit planning</h3>
            <p className="action-card-sub">
              Now reviewing candidate London hotels, corporate offsites, and frequent traveller accounts.
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
    </section>
  );
};
