import { describe, it, expect, beforeEach, vi } from "vitest";
import { savePilotRequest, PILOT_KEY } from "./storage";

describe("savePilotRequest", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.restoreAllMocks();
  });

  it("saves a valid pilot request with all 5 fields and ISO timestamp", async () => {
    const input = {
      fullName: "Jane Doe",
      phoneNumber: "+44 20 7946 0912",
      emailAddress: "jane@example.co.uk",
      organisationName: "Acme Travel"
    };

    await savePilotRequest(input);

    const stored = window.localStorage.getItem(PILOT_KEY);
    expect(stored).not.toBeNull();
    const records = JSON.parse(stored!);
    expect(Array.isArray(records)).toBe(true);
    expect(records).toHaveLength(1);

    expect(records[0]).toMatchObject({
      fullName: "Jane Doe",
      phoneNumber: "+44 20 7946 0912",
      emailAddress: "jane@example.co.uk",
      organisationName: "Acme Travel"
    });
    expect(new Date(records[0].submittedAt).toISOString()).toBe(records[0].submittedAt);
  });

  it("preserves previous entries when appending a second request", async () => {
    await savePilotRequest({
      fullName: "Alice Smith",
      phoneNumber: "+44 7700 900077",
      emailAddress: "alice@example.com",
      organisationName: "First Org"
    });

    await savePilotRequest({
      fullName: "Bob Jones",
      phoneNumber: "020 7946 0123",
      emailAddress: "bob@example.com",
      organisationName: "Second Org"
    });

    const stored = window.localStorage.getItem(PILOT_KEY);
    const records = JSON.parse(stored!);
    expect(records).toHaveLength(2);
    expect(records[0].fullName).toBe("Alice Smith");
    expect(records[1].fullName).toBe("Bob Jones");
    expect(records[1].phoneNumber).toBe("020 7946 0123"); // Preserves leading zero
  });

  it("trims surrounding whitespace from all fields", async () => {
    await savePilotRequest({
      fullName: "  Trimmed User  ",
      phoneNumber: "  +44 7900 123456  ",
      emailAddress: "  user@domain.com  ",
      organisationName: "  Trimmed Org  "
    });

    const records = JSON.parse(window.localStorage.getItem(PILOT_KEY)!);
    expect(records[0].fullName).toBe("Trimmed User");
    expect(records[0].phoneNumber).toBe("+44 7900 123456");
    expect(records[0].emailAddress).toBe("user@domain.com");
    expect(records[0].organisationName).toBe("Trimmed Org");
  });

  it("rejects empty or whitespace-only fields", async () => {
    await expect(
      savePilotRequest({
        fullName: "   ",
        phoneNumber: "+44 20 7946 0912",
        emailAddress: "test@example.com",
        organisationName: "Test Org"
      })
    ).rejects.toThrow("A required field is empty.");

    // Local storage should remain uninitialized/empty
    expect(window.localStorage.getItem(PILOT_KEY)).toBeNull();
  });

  it("throws error and does not overwrite if existing localStorage is corrupted", async () => {
    window.localStorage.setItem(PILOT_KEY, "invalid-json-string");

    await expect(
      savePilotRequest({
        fullName: "Test",
        phoneNumber: "123",
        emailAddress: "test@test.com",
        organisationName: "Org"
      })
    ).rejects.toThrow();

    // Original invalid value must remain untouched (not wiped or replaced)
    expect(window.localStorage.getItem(PILOT_KEY)).toBe("invalid-json-string");
  });

  it("throws error if existing localStorage is not an array", async () => {
    window.localStorage.setItem(PILOT_KEY, JSON.stringify({ not: "an array" }));

    await expect(
      savePilotRequest({
        fullName: "Test",
        phoneNumber: "123",
        emailAddress: "test@test.com",
        organisationName: "Org"
      })
    ).rejects.toThrow("Existing pilot records could not be read.");

    // Does not replace the corrupted object
    expect(JSON.parse(window.localStorage.getItem(PILOT_KEY)!)).toEqual({ not: "an array" });
  });

  it("uses navigator.locks when available", async () => {
    let lockRequested = false;
    // Mock navigator.locks
    const originalLocks = navigator.locks;
    (navigator as unknown as { locks: { request: (key: string, fn: () => void) => Promise<void> } }).locks = {
      request: async (key: string, fn: () => void) => {
        if (key === PILOT_KEY) lockRequested = true;
        await fn();
      }
    };

    await savePilotRequest({
      fullName: "Lock Tester",
      phoneNumber: "+44 1234",
      emailAddress: "lock@test.com",
      organisationName: "Lock Co"
    });

    expect(lockRequested).toBe(true);
    (navigator as unknown as { locks?: typeof originalLocks }).locks = originalLocks;
  });
});
