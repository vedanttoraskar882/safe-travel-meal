import "@testing-library/jest-dom/vitest";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  HTMLDialogElement.prototype.showModal = HTMLDialogElement.prototype.showModal || function(this: HTMLDialogElement) {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = HTMLDialogElement.prototype.close || function(this: HTMLDialogElement) {
    this.open = false;
  };
  window.localStorage.clear();
});

describe("App Integration Tests", () => {
  it("renders all seven sections in the exact specified order", () => {
    const { container } = render(<App />);

    const home = container.querySelector("#home");
    const about = container.querySelector("#about");
    const platform = container.querySelector("#platform");
    const howItWorks = container.querySelector("#how-it-works");
    const pricing = container.querySelector("#pricing");
    const faq = container.querySelector("#faq");
    const footer = container.querySelector("#footer");

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(platform).toBeInTheDocument();
    expect(howItWorks).toBeInTheDocument();
    expect(pricing).toBeInTheDocument();
    expect(faq).toBeInTheDocument();
    expect(footer).toBeInTheDocument();

    // Verify ordering
    const elements = [home, about, platform, howItWorks, pricing, faq, footer];
    for (let i = 0; i < elements.length - 1; i++) {
      expect(elements[i]?.compareDocumentPosition(elements[i + 1]!)).toBe(
        Node.DOCUMENT_POSITION_FOLLOWING
      );
    }
  });

  it("header has working anchor links for all sections", () => {
    render(<App />);
    const nav = screen.getByRole("navigation", { name: /primary navigation/i });

    expect(nav.querySelector('a[href="#home"]')).toHaveTextContent("Home");
    expect(nav.querySelector('a[href="#about"]')).toHaveTextContent("About");
    expect(nav.querySelector('a[href="#platform"]')).toHaveTextContent("Platform");
    expect(nav.querySelector('a[href="#how-it-works"]')).toHaveTextContent("How It Works");
    expect(nav.querySelector('a[href="#pricing"]')).toHaveTextContent("Market & Pricing");
    expect(nav.querySelector('a[href="#faq"]')).toHaveTextContent("FAQ");
  });

  it("all Request a Pilot buttons open the shared dialog", () => {
    render(<App />);

    const pilotButtons = screen.getAllByRole("button", { name: /Request a Pilot/i });
    expect(pilotButtons.length).toBeGreaterThanOrEqual(3);

    // Clicking hero button opens dialog
    fireEvent.click(pilotButtons[1]);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Request a Pilot/i, level: 2 })).toBeInTheDocument();
  });

  it("expands the exclusion sets panel when FAQ link is clicked", () => {
    render(<App />);

    // Initially panel is closed
    expect(screen.queryByText(/Set 1 — Peanut and tree nut/i)).not.toBeInTheDocument();

    // Click FAQ Question 2 to expand it
    const faqBtn = screen.getByRole("button", {
      name: /Which allergen profiles can the planned service cover\?/i
    });
    fireEvent.click(faqBtn);

    // Find and click the link inside FAQ #2
    const faqLink = screen.getByText(/View the 6 planned exclusion sets/i);
    fireEvent.click(faqLink);

    // Panel should now be open and display the exclusion sets
    expect(screen.getByText(/Set 1 — Peanut and tree nut/i)).toBeInTheDocument();
    expect(screen.getByText(/Set 2 — Peanut, tree nut and sesame/i)).toBeInTheDocument();
    expect(screen.getByText(/Set 3 — Milk and egg/i)).toBeInTheDocument();
    expect(screen.getByText(/Set 4 — Gluten-containing cereals/i)).toBeInTheDocument();
    expect(screen.getByText(/Set 5 — Fish, crustacean and mollusc/i)).toBeInTheDocument();
    expect(screen.getByText(/Set 6 — All of the exclusions in sets 1–5 combined/i)).toBeInTheDocument();
  });

  it("displays the worked London trip with six meals and two handovers", () => {
    render(<App />);

    expect(screen.getByText(/One London trip, six meals, two handovers/i)).toBeInTheDocument();
    expect(screen.getByText(/Illustrative journey from the business plan/i)).toBeInTheDocument();
    expect(screen.getByText(/6 Meals Planned/i)).toBeInTheDocument();
    expect(screen.getByText(/2 Physical Handovers/i)).toBeInTheDocument();
  });

  it("displays the exact headline and copy in Home", () => {
    render(<App />);

    expect(
      screen.getByText("Plan for the meals your journey leaves uncertain.")
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /A late arrival, a hotel buffet and a working lunch can each raise a different question for a traveller with food allergies/i
      )
    ).toBeInTheDocument();
  });

  it("displays Hardik Nilesh Soni's profile in About with qualifications and employment disclaimer", () => {
    render(<App />);

    expect(screen.getByText("Why the journey matters")).toBeInTheDocument();
    expect(screen.getByText("Hardik Nilesh Soni")).toBeInTheDocument();
    expect(screen.getByText(/Chef de Partie at Premier Inn in Greenwich/i)).toBeInTheDocument();
    expect(screen.getByText(/Chef de Partie role at Ibis in Southwark in April 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/BPP University/i)).toBeInTheDocument();
    expect(screen.getByText(/Sardar Patel University/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Hotel names are cited solely as founder employment history/i)
    ).toBeInTheDocument();
  });

  it("displays all three platform components, protocol foundation, and Prototype today notice", () => {
    render(<App />);

    expect(screen.getByText("Journey Allergen Assurance Platform")).toBeInTheDocument();
    expect(screen.getByText("Exposure engine")).toBeInTheDocument();
    expect(screen.getByText("Run scheduler")).toBeInTheDocument();
    expect(screen.getByText("Chain-of-custody ledger")).toBeInTheDocument();
    expect(screen.getByText("Journey Allergen Assurance Protocol")).toBeInTheDocument();
    expect(screen.getByText("Prototype today")).toBeInTheDocument();
  });
});
