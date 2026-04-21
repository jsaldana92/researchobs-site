import logoUrl from "../assets/logo/research_obs_logo.png";

export default function AppLogo({
  className = "",
  priority = false,
  alt = "ResearchObs logo",
}) {
  return (
    <img
      src={logoUrl}
      alt={alt}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      draggable={false}
      className={`block select-none object-contain ${className}`.trim()}
    />
  );
}
