import React from "react";

interface FooterProps {
  onRequestPilot: (triggerBtn: HTMLElement) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div className="section-container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-company-name">Safe Travel Meal Kits Limited</span>
            <p className="footer-tagline">
              Developing advance allergen mapping, dedicated kitchen runs, and verified handovers for London travel.
            </p>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#platform">Platform</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#pricing">Market &amp; Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-action-col">
            <h4 className="footer-heading">Pilot Registration</h4>
            <p className="footer-action-text">
              Interested in participating in London hotel, venue or team pilot runs?
            </p>
            <button
              type="button"
              className="btn btn-outline-light btn-sm"
              onClick={(e) => onRequestPilot(e.currentTarget)}
            >
              Request a Pilot
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-legal">
            Safe Travel Meal Kits Limited • London Pilot Demonstration
          </p>
          <a href="#home" onClick={scrollToTop} className="back-to-top-link">
            Back to top
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
              <path d="M12 10L8 6l-4 4" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
