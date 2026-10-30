/**
 * variant="mark"  -> the BY monogram only (compact, for the navbar)
 * variant="full"  -> monogram + wordmark (hero, footer)
 */
export default function Logo({ variant = "full", className = "" }) {
  const base = import.meta.env.BASE_URL;
  const src = variant === "mark" ? `${base}images/logo-mark.png` : `${base}images/logo-full.png`;
  const alt = "BharatYaksha Technologies logo";

  return (
    <span className={`logo logo-${variant} ${className}`}>
      <img src={src} alt={alt} loading="eager" decoding="async" />
    </span>
  );
}
