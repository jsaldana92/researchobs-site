// src/services/contactRequestApi.js

import { buildResearchObsApiUrl } from "../config/researchobsApi";

const CONTACT_REQUEST_PATH = "/public/contact-requests";

function cleanString(value) {
  return String(value ?? "").trim();
}

export async function submitContactRequest({
  firstName,
  lastName,
  email,
  institution,
  message,
  website,
}) {
  const payload = {
    firstName: cleanString(firstName),
    lastName: cleanString(lastName),
    email: cleanString(email),
    institution: cleanString(institution),
    requestType: "Website contact form",
    details: cleanString(message),

    source: "/contact",
    sourcePage: "contact_page",
    appSection: "website_contact",
    platform: "web",

    // Honeypot field. This should stay empty in the real form.
    website: cleanString(website),
  };

  const response = await fetch(buildResearchObsApiUrl(CONTACT_REQUEST_PATH), {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(
      data?.message || "Could not submit your message. Please try again.",
    );
  }

  return data;
}
