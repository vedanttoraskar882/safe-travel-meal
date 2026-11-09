import React, { useEffect, useRef, useState } from "react";
import { savePilotRequest } from "../utils/storage";

interface PilotDialogProps {
  isOpen: boolean;
  onClose: () => void;
  triggerElement: HTMLElement | null;
}

export const PilotDialog: React.FC<PilotDialogProps> = ({
  isOpen,
  onClose,
  triggerElement
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [organisationName, setOrganisationName] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);

  // Manage native dialog open/close, focus, and escape key
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
      setStatus("idle");
      setValidationError(null);
      // Move focus into the form
      setTimeout(() => {
        firstInputRef.current?.focus();
      }, 50);
    } else {
      if (dialog.open) {
        dialog.close();
      }
      if (triggerElement) {
        triggerElement.focus();
      }
    }
  }, [isOpen, triggerElement]);

  // Handle cancel/escape from native dialog
  const handleDialogCancel = (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    const trimmedName = fullName.trim();
    const trimmedPhone = phoneNumber.trim();
    const trimmedEmail = emailAddress.trim();
    const trimmedOrg = organisationName.trim();

    if (!trimmedName || !trimmedPhone || !trimmedEmail || !trimmedOrg) {
      setValidationError("Please complete all four required fields.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await savePilotRequest({
        fullName: trimmedName,
        phoneNumber: trimmedPhone,
        emailAddress: trimmedEmail,
        organisationName: trimmedOrg
      });

      // Succeeded: clear form, display success
      setStatus("success");
      setFullName("");
      setPhoneNumber("");
      setEmailAddress("");
      setOrganisationName("");
    } catch {
      // Failed: keep all typed values visible in the form!
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen && !dialogRef.current?.open) {
    // Keep in DOM so native dialog handles keyboard traps and accessibility properly
  }

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleDialogCancel}
      className="pilot-dialog"
      aria-labelledby="pilot-dialog-title"
      aria-describedby="pilot-dialog-desc"
    >
      <div className="pilot-dialog-content">
        <header className="pilot-dialog-header">
          <div className="pilot-dialog-header-text">
            <span className="badge badge-accent">Pilot Demonstration</span>
            <h2 id="pilot-dialog-title" className="pilot-dialog-title">
              Request a Pilot
            </h2>
            <p id="pilot-dialog-desc" className="pilot-dialog-subtext">
              Register interest for planned London hotel, venue and airport meal kit pilots.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="dialog-close-button"
            aria-label="Close pilot request dialog"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </header>

        {status === "success" && (
          <div
            className="status-banner status-success"
            role="status"
            aria-live="polite"
          >
            <svg
              className="status-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong>Pilot request saved in this browser.</strong>
              <p className="status-note">
                Your entry has been recorded in local storage for this demonstration.
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div
            className="status-banner status-error"
            role="alert"
            aria-live="assertive"
          >
            <svg
              className="status-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <strong>We couldn’t save your request in this browser. Your details are still in the form.</strong>
              <p className="status-note">
                Please verify storage permissions in your browser and try again.
              </p>
            </div>
          </div>
        )}

        {validationError && (
          <div
            className="status-banner status-warning"
            role="alert"
          >
            <span>{validationError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="pilot-form">
          <div className="form-group">
            <label htmlFor="pilot-fullName" className="form-label">
              Full Name <span className="required-star" aria-hidden="true">*</span>
            </label>
            <input
              ref={firstInputRef}
              id="pilot-fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="form-input"
              placeholder="e.g. Eleanor Vance"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pilot-phoneNumber" className="form-label">
              Phone Number <span className="required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="pilot-phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="form-input"
              placeholder="e.g. +44 20 7946 0912"
              disabled={isSubmitting}
            />
            <span className="form-hint">
              International prefixes, spaces, brackets and hyphens are accepted.
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="pilot-emailAddress" className="form-label">
              Email Address <span className="required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="pilot-emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              className="form-input"
              placeholder="e.g. e.vance@example.co.uk"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pilot-organisationName" className="form-label">
              Organisation Name <span className="required-star" aria-hidden="true">*</span>
            </label>
            <input
              id="pilot-organisationName"
              name="organisationName"
              type="text"
              autoComplete="organization"
              required
              value={organisationName}
              onChange={(e) => setOrganisationName(e.target.value)}
              className="form-input"
              placeholder="e.g. Self / Westminster Hospitality Partners"
              disabled={isSubmitting}
            />
          </div>

          <div className="form-disclosure" role="note">
            <p>
              This demo saves your details only in this browser. Your request will not be sent to Safe Travel Meal Kits Limited.
            </p>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-block"
            >
              {isSubmitting ? "Saving request..." : "Save pilot request"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="btn btn-ghost btn-block"
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
