// src/pages/Contact.jsx

import { useState } from "react";
import { submitContactRequest } from "../services/contactRequestApi";

const inputClassName =
  "input input-bordered mt-2 w-full rounded-none border-[#cfd8cc] bg-white text-sm text-slate-950 placeholder:text-slate-400 focus:border-[#5F7659] focus:outline-none focus:ring-2 focus:ring-[#5F7659]/20";

const textareaClassName =
  "textarea textarea-bordered mt-2 min-h-44 w-full resize-y rounded-none border-[#cfd8cc] bg-white text-sm text-slate-950 placeholder:text-slate-400 focus:border-[#5F7659] focus:outline-none focus:ring-2 focus:ring-[#5F7659]/20";

const labelClassName = "block text-sm font-black text-slate-950";

function FieldError({ children }) {
  if (!children) return null;

  return (
    <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-800">
      {children}
    </p>
  );
}

export default function Contact() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    institution: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isSubmitting = status === "submitting";
  const isSuccess = status === "success";

  const updateField = (fieldName) => (event) => {
    const { value } = event.target;

    setFormValues((current) => ({
      ...current,
      [fieldName]: value,
    }));
  };

  const resetForm = () => {
    setFormValues({
      firstName: "",
      lastName: "",
      email: "",
      institution: "",
      message: "",
      website: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitContactRequest(formValues);
      setStatus("success");
      resetForm();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Could not submit your message. Please try again.",
      );
    }
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-[#071b1d] via-[#102820] to-[#3f5138] px-6 py-24 text-white sm:py-28">
      <section className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#b8c9b4]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact the ResearchObs team
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/74 sm:text-lg">
            Questions about ResearchObs, institutional use, app support,
            upcoming features, or general feedback?
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/74 sm:text-lg">
            Let us know!
          </p>
          <p className="mx-auto mt-5 max-w-4xl text-base leading-7 text-white/74 sm:text-lg">
            Please include as much detail as you can to help answer any
            questions you may have.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          <div className="border border-white/35 bg-[#F8F7F3] p-6 text-slate-950 shadow-[0_28px_90px_rgba(0,0,0,0.34)] sm:p-8">
            {isSuccess ? (
              <div className="border border-[#cfd8cc] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#5F7659]">
                  Message submitted
                </p>

                <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
                  Thanks for reaching out
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Your message was sent to ResearchObs. We will review it and
                  follow up using the email address you provided.
                </p>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-8 bg-[#5F7659] px-5 py-3 text-sm font-black text-white transition hover:bg-[#4f654b]"
                >
                  Submit another message
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
                    First name<span className="text-red-600">*</span>
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
                    Last name<span className="text-red-600">*</span>
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
                  Email<span className="text-red-600">*</span>
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
                  Organization or institution
                  <input
                    type="text"
                    value={formValues.institution}
                    onChange={updateField("institution")}
                    className={inputClassName}
                    maxLength={180}
                  />
                </label>

                <label className={labelClassName}>
                  Message<span className="text-red-600">*</span>
                  <textarea
                    value={formValues.message}
                    onChange={updateField("message")}
                    className={textareaClassName}
                    maxLength={4000}
                    required
                  />
                </label>

                <FieldError>{errorMessage}</FieldError>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#5F7659] px-5 py-4 text-sm font-black text-white transition hover:bg-[#4f654b] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Submitting..." : "Submit message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
