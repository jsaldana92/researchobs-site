// src/config/researchobsApi.js

const rawApiBaseUrl = import.meta.env.VITE_RESEARCHOBS_API_BASE_URL ?? "";

export const RESEARCHOBS_API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, "");

export function requireResearchObsApiBaseUrl() {
  if (!RESEARCHOBS_API_BASE_URL) {
    throw new Error(
      "Missing VITE_RESEARCHOBS_API_BASE_URL. Add it to your local .env.local file before submitting website requests.",
    );
  }

  return RESEARCHOBS_API_BASE_URL;
}

export function buildResearchObsApiUrl(path) {
  const baseUrl = requireResearchObsApiBaseUrl();
  const safePath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${safePath}`;
}
