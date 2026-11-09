import type { PilotInput } from "../types";

export const PILOT_KEY = "safeTravelMealKits.pilotRequests.v1";

/**
 * Persists a validated pilot request into localStorage under safeTravelMealKits.pilotRequests.v1
 * Serialises simultaneous submissions with Web Locks API where supported.
 * Fails safely if storage is blocked, full, or existing data is corrupted.
 */
export async function savePilotRequest(input: PilotInput): Promise<void> {
  const entry = {
    fullName: input.fullName.trim(),
    phoneNumber: input.phoneNumber.trim(),
    emailAddress: input.emailAddress.trim(),
    organisationName: input.organisationName.trim(),
    submittedAt: new Date().toISOString()
  };

  if (Object.values(entry).some((value) => value.length === 0)) {
    throw new Error("A required field is empty.");
  }

  function appendEntry() {
    const raw = window.localStorage.getItem(PILOT_KEY);
    const previous: unknown = raw === null ? [] : JSON.parse(raw);

    if (!Array.isArray(previous)) {
      throw new Error("Existing pilot records could not be read.");
    }

    window.localStorage.setItem(
      PILOT_KEY,
      JSON.stringify([...previous, entry])
    );
  }

  if (navigator.locks) {
    await navigator.locks.request(PILOT_KEY, appendEntry);
  } else {
    appendEntry();
  }
}
