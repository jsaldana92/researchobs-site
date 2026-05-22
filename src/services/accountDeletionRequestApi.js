// src/services/accountDeletionRequestApi.js

import { buildResearchObsApiUrl } from "../config/researchobsApi";

const ACCOUNT_DELETION_REQUEST_PATH = "/public/account-deletion-requests";

function cleanString(value) {
  return String(value ?? "").trim();
}

export async function submitAccountDeletionRequest({
  firstName,
  lastName,
  email,
  institution,
  reasonKey,
  otherText,
  website,
}) {
  const payload = {
    firstName: cleanString(firstName),
    lastName: cleanString(lastName),
    email: cleanString(email),
    institution: cleanString(institution),
    reasonKey: cleanString(reasonKey),
    otherText: cleanString(otherText),

    source: "/delete-account",
    sourcePage: "delete_account_page",
    appSection: "account_deletion",
    platform: "web",

    // Honeypot field. This should stay empty in the real form.
    website: cleanString(website),
  };

  const response = await fetch(
    buildResearchObsApiUrl(ACCOUNT_DELETION_REQUEST_PATH),
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  let data = null;

  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        "Could not submit the account deletion request. Please try again.",
    );
  }

  return data;
}
