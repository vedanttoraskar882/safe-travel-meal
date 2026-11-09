import React, { useState } from "react";

interface HeaderProps {
  onRequestPilot: (triggerBtn: HTMLElement) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const handleCtaClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuOpen(false);
    onRequestPilot(e.currentTarget);
  };

  return (
    <>
      <a href="#home" className="skip-link">
        Skip to main content
      </a>
      <header className="site-header" role="banner">
        <div className="header-container">
          <a href="#home" className="brand-link" aria-label="Safe Travel Meal Kits Limited - Home">
            <span className="brand-mark" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="5" width="18" height="15" rx="3" />
                <path d="M3 10h18" />
                <path d="M9 10v10" />
                <circle cx="15" cy="15" r="2" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </span>
            <span className="brand-text">
              <span className="brand-name">Safe Travel Meal Kits</span>
              <span className="brand-subtitle">London Pilot</span>
            </span>
          </a>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="hamburger-box" aria-hidden="true">
              <span className={`hamburger-inner ${mobileMenuOpen ? "is-open" : ""}`} />
            </span>
          </button>

          <nav
            id="primary-navigation"
            className={`site-nav ${mobileMenuOpen ? "is-open" : ""}`}
            aria-label="Primary navigation"
          >
            <ul className="nav-list">
              <li>
                <a href="#home" onClick={handleNavClick} className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={handleNavClick} className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="#platform" onClick={handleNavClick} className="nav-link">
                  Platform
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={handleNavClick} className="nav-link">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={handleNavClick} className="nav-link">
                  Market & Pricing
                </a>
              </li>
              <li>
                <a href="#faq" onClick={handleNavClick} className="nav-link">
                  FAQ
                </a>
              </li>
            </ul>

            <div className="nav-cta-wrapper">
              <button
                type="button"
                className="btn btn-primary btn-sm header-cta"
                onClick={handleCtaClick}
              >
                Request a Pilot
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
