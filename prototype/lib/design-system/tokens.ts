/**
 * Design tokens – Lunde-poj / JerryPoj inspired (clean, green accents).
 */
export const colors = {
  primary: "#2d8a3e",
  primaryDark: "#237033",
  primaryLight: "#e8f5e9",
  accent: "#ffc107",
  text: "#1a1a1a",
  textMuted: "#5c5c5c",
  background: "#ffffff",
  backgroundAlt: "#f5f5f5",
  border: "#e0e0e0",
  error: "#c62828",
  success: "#2e7d32",
} as const;

export const spacing = {
  xs: "0.25rem",
  sm: "0.5rem",
  md: "1rem",
  lg: "1.5rem",
  xl: "2rem",
  "2xl": "3rem",
} as const;

export const borderRadius = {
  sm: "4px",
  md: "8px",
  lg: "12px",
  full: "9999px",
} as const;
