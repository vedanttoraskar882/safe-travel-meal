import "@testing-library/jest-dom/vitest";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PilotDialog } from "./PilotDialog";
import { PILOT_KEY } from "../utils/storage";

// HTMLDialogElement mock for jsdom
beforeEach(() => {
  HTMLDialogElement.prototype.showModal = HTMLDialogElement.prototype.showModal || function(this: HTMLDialogElement) {
    this.open = true;
  };
  HTMLDialogElement.prototype.close = HTMLDialogElement.prototype.close || function(this: HTMLDialogElement) {
    this.open = false;
  };
  window.localStorage.clear();
});

describe("PilotDialog Component", () => {
  it("renders all four required fields with correct autocomplete and disclosure", () => {
    render(<PilotDialog isOpen={true} onClose={() => {}} triggerElement={null} />);

    const nameInput = screen.getByLabelText(/Full Name/i);
    expect(nameInput).toHaveAttribute("autocomplete", "name");
    expect(nameInput).toBeRequired();

    const phoneInput = screen.getByLabelText(/Phone Number/i);
    expect(phoneInput).toHaveAttribute("autocomplete", "tel");
    expect(phoneInput).toBeRequired();

    const emailInput = screen.getByLabelText(/Email Address/i);
    expect(emailInput).toHaveAttribute("autocomplete", "email");
    expect(emailInput).toBeRequired();

    const orgInput = screen.getByLabelText(/Organisation Name/i);
    expect(orgInput).toHaveAttribute("autocomplete", "organization");
    expect(orgInput).toBeRequired();

    expect(
      screen.getByText(
        /This demo saves your details only in this browser. Your request will not be sent to Safe Travel Meal Kits Limited./i
      )
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Save pilot request/i })).toBeInTheDocument();
  });

  it("submits successfully, displays success message, and clears form", async () => {
    render(<PilotDialog isOpen={true} onClose={() => {}} triggerElement={null} />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "Eleanor Vance" }
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "+44 20 7946 0912" }
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "eleanor@example.co.uk" }
    });
    fireEvent.change(screen.getByLabelText(/Organisation Name/i), {
      target: { value: "Westminster Partners" }
    });

    fireEvent.click(screen.getByRole("button", { name: /Save pilot request/i }));

    await waitFor(() => {
      expect(screen.getByText("Pilot request saved in this browser.")).toBeInTheDocument();
    });

    // Form inputs should now be empty
    expect((screen.getByLabelText(/Full Name/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/Phone Number/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/Email Address/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/Organisation Name/i) as HTMLInputElement).value).toBe("");

    // Local storage should contain the saved entry
    const saved = JSON.parse(window.localStorage.getItem(PILOT_KEY)!);
    expect(saved).toHaveLength(1);
    expect(saved[0].fullName).toBe("Eleanor Vance");
    expect(saved[0].phoneNumber).toBe("+44 20 7946 0912");
  });

  it("preserves typed values on storage failure and displays error message", async () => {
    // Corrupt localStorage to trigger failure in JSON.parse
    window.localStorage.setItem(PILOT_KEY, "corrupted-json-data");

    render(<PilotDialog isOpen={true} onClose={() => {}} triggerElement={null} />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "Eleanor Vance" }
    });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "+44 20 7946 0912" }
    });
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "eleanor@example.co.uk" }
    });
    fireEvent.change(screen.getByLabelText(/Organisation Name/i), {
      target: { value: "Westminster Partners" }
    });

    fireEvent.click(screen.getByRole("button", { name: /Save pilot request/i }));

    await waitFor(() => {
      expect(
        screen.getByText(
          "We couldn’t save your request in this browser. Your details are still in the form."
        )
      ).toBeInTheDocument();
    });

    // Typed values MUST remain visible in the form!
    expect((screen.getByLabelText(/Full Name/i) as HTMLInputElement).value).toBe("Eleanor Vance");
    expect((screen.getByLabelText(/Phone Number/i) as HTMLInputElement).value).toBe("+44 20 7946 0912");
    expect((screen.getByLabelText(/Email Address/i) as HTMLInputElement).value).toBe("eleanor@example.co.uk");
    expect((screen.getByLabelText(/Organisation Name/i) as HTMLInputElement).value).toBe("Westminster Partners");
  });

  it("rejects empty submission and displays validation warning", async () => {
    render(<PilotDialog isOpen={true} onClose={() => {}} triggerElement={null} />);

    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "   " }
    });

    fireEvent.click(screen.getByRole("button", { name: /Save pilot request/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Please complete all four required fields/i)
      ).toBeInTheDocument();
    });

    expect(window.localStorage.getItem(PILOT_KEY)).toBeNull();
  });
});
