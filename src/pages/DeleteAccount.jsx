// src/pages/DeleteAccount.jsx

import { useEffect, useRef, useState } from "react";
import { submitAccountDeletionRequest } from "../services/accountDeletionRequestApi";

const REASON_OPTIONS = [
  {
    value: "no_longer_need",
    label: "No longer need the app.",
  },
  {
    value: "privacy_concerns",
    label: "Privacy concerns.",
  },
  {
    value: "trouble_using_app",
    label: "Trouble using the app.",
  },
  {
    value: "moving_to_another_tool",
    label: "Moving to another tool.",
  },
  {
    value: "research_not_supported",
    label: "App does not support my research.",
  },
  {
    value: "other",
    label: "Other",
  },
];

const inputClassName =
  "input input-bordered mt-2 w-full rounded-none border-[#cfd8cc] bg-white text-sm text-slate-950 placeholder:text-slate-400 focus:border-[#5F7659] focus:outline-none focus:ring-2 focus:ring-[#5F7659]/20";

const dropdownButtonClassName =
  "mt-2 flex min-h-12 w-full items-center justify-between border border-[#cfd8cc] bg-white px-4 py-3 text-left text-sm leading-6 text-slate-950 transition focus:border-[#5F7659] focus:outline-none focus:ring-2 focus:ring-[#5F7659]/20";

const dropdownMenuClassName =
  "absolute z-30 mt-2 w-full origin-top border border-[#cfd8cc] bg-white py-2 shadow-[0_18px_42px_rgba(15,23,42,0.18)] transition duration-200 ease-out";

const textareaClassName =
  "textarea textarea-bordered mt-2 min-h-36 w-full resize-y rounded-none border-[#cfd8cc] bg-white text-sm text-slate-950 placeholder:text-slate-400 focus:border-[#5F7659] focus:outline-none focus:ring-2 focus:ring-[#5F7659]/20";

const labelClassName = "block text-sm font-black text-slate-950";

function FieldError({ children }) {
  if (!children) return null;

  return (
    <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-800">
      {children}
    </p>
  );
}

export default function DeleteAccount() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    reasonKey: "no_longer_need",
    otherText: "",
    website: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [reasonMenuOpen, setReasonMenuOpen] = useState(false);
  const reasonMenuRef = useRef(null);

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";
  const selectedReason =
    REASON_OPTIONS.find((option) => option.value === formValues.reasonKey) ??
    REASON_OPTIONS[0];
  const feedbackPlaceholder =
    formValues.reasonKey === "moving_to_another_tool"
      ? "Please let us know which tool you are planning to use."
      : "Add any optional feedback about your reason for leaving.";

  const updateField = (fieldName) => (event) => {
    const { value } = event.target;

    setFormValues((current) => ({
      ...current,
      [fieldName]: value,
    }));
  };

  useEffect(() => {
    function handleDocumentClick(event) {
      if (!reasonMenuRef.current?.contains(event.target)) {
        setReasonMenuOpen(false);
      }
    }

    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        setReasonMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitAccountDeletionRequest(formValues);
      setStatus("success");
      setFormValues({
        firstName: "",
        lastName: "",
        email: "",
        institution: "",
        reasonKey: "no_longer_need",
        otherText: "",
        website: "",
      });
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not submit the account deletion request. Please try again.",
      );
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-[#071b1d] via-[#102820] to-[#3f5138] px-6 py-24 text-white sm:py-28">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8c9b4]">
            Account Deletion
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Request deletion of your ResearchObs account
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/74 sm:text-lg">
            Use this form if you cannot access the in-app account deletion
            option. Submitting this request does not immediately delete your
            account. ResearchObs will email the address you provide and ask you
            to reply from that email account before the deletion request is
            processed.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="border border-white/35 bg-[#F8F7F3] p-6 text-slate-950 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-8">
            {isSuccess ? (
              <div className="border border-[#cfd8cc] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7659]">
                  Request submitted
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  Check your email to confirm the request
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  We received your account deletion request. Please check the
                  email address you submitted and reply to the confirmation
                  message. Your account will not be deleted until the request is
                  verified from that email address.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 bg-[#5F7659] px-5 py-3 text-sm font-black text-white transition hover:bg-[#4f654b]"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="website"
                  value={formValues.website}
                  onChange={updateField("website")}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className={labelClassName}>
                    First name
                    <input
                      type="text"
                      value={formValues.firstName}
                      onChange={updateField("firstName")}
                      className={inputClassName}
                      autoComplete="given-name"
                      maxLength={120}
                      required
                    />
                  </label>

                  <label className={labelClassName}>
                    Last name
                    <input
                      type="text"
                      value={formValues.lastName}
                      onChange={updateField("lastName")}
                      className={inputClassName}
                      autoComplete="family-name"
                      maxLength={120}
                      required
                    />
                  </label>
                </div>

                <label className={labelClassName}>
                  Email used for your ResearchObs account
                  <input
                    type="email"
                    value={formValues.email}
                    onChange={updateField("email")}
                    className={inputClassName}
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </label>

                <label className={labelClassName}>
                  Organization or institution, optional
                  <input
                    type="text"
                    value={formValues.institution}
                    onChange={updateField("institution")}
                    className={inputClassName}
                    maxLength={180}
                  />
                </label>

                <div className={labelClassName} ref={reasonMenuRef}>
                  <span>Reason for leaving</span>

                  <div className="relative">
                    <button
                      type="button"
                      className={dropdownButtonClassName}
                      onClick={() => setReasonMenuOpen((open) => !open)}
                      aria-haspopup="listbox"
                      aria-expanded={reasonMenuOpen}
                    >
                      <span className="block min-w-0 flex-1 truncate pr-4">
                        {selectedReason.label}
                      </span>

                      <span
                        className={`text-sm text-[#5F7659] transition-transform duration-200 ${
                          reasonMenuOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`${dropdownMenuClassName} ${
                        reasonMenuOpen
                          ? "translate-y-0 scale-100 opacity-100"
                          : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
                      }`}
                      role="listbox"
                    >
                      {REASON_OPTIONS.map((option) => {
                        const selected = option.value === formValues.reasonKey;

                        return (
                          <button
                            key={option.value}
                            type="button"
                            role="option"
                            aria-selected={selected}
                            onClick={() => {
                              setFormValues((current) => ({
                                ...current,
                                reasonKey: option.value,
                              }));
                              setReasonMenuOpen(false);
                            }}
                            className={`block w-full px-4 py-3 text-left text-sm font-bold transition ${
                              selected
                                ? "bg-[#E7ECE7] text-[#29423B]"
                                : "text-slate-700 hover:bg-[#F2F1EF] hover:text-slate-950"
                            }`}
                          >
                            {option.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <label className={labelClassName}>
                  Optional feedback
                  <textarea
                    value={formValues.otherText}
                    onChange={updateField("otherText")}
                    className={textareaClassName}
                    maxLength={1000}
                    placeholder={feedbackPlaceholder}
                  />
                </label>

                <div className="border border-[#cfd8cc] bg-white p-4 text-sm leading-7 text-slate-600">
                  After you submit this request, ResearchObs will send a
                  confirmation email to the account email address you provide.
                  Your account and associated account data will not be deleted
                  until the request is verified from that email address.
                </div>

                <FieldError>{errorMessage}</FieldError>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5F7659] px-6 py-4 text-base font-black text-white transition hover:bg-[#4f654b] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting
                    ? "Submitting request..."
                    : "Submit account deletion request"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
