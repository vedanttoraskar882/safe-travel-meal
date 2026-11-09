import React, { useState, useEffect } from "react";

interface HeaderProps {
  onRequestPilot: (triggerBtn: HTMLElement) => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestPilot }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
        role="banner"
      >
        <div className="header-container">
          <a
            href="#home"
            className="brand-link"
            aria-label="Safe Travel Meal Kits Limited - Home"
          >
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
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
                  Market &amp; Pricing
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
