interface LogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export default function Logo({ variant = "light", showTagline = false }: LogoProps) {
  const natColor = variant === "light" ? "#ffffff" : "#0d1b6b";
  const techColor = variant === "light" ? "#94a3b8" : "#3b5bdb";

  return (
    <svg
      viewBox="0 0 230 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NAT Technologies"
      className="h-12 w-auto"
    >
      {/* ── Geometric mark ── */}
      {/* Left vertical bar */}
      <rect x="0" y="4" width="7" height="48" rx="2" fill="#16a34a" />
      {/* Diagonal middle stroke (the "A" crossbar energy) */}
      <polygon points="7,4 22,4 15,30 7,30" fill="#22c55e" />
      {/* Bottom right of mark */}
      <polygon points="15,30 22,56 7,56 7,30" fill="#16a34a" opacity="0.7" />
      {/* Small accent dot */}
      <circle cx="25" cy="4" r="3.5" fill="#4ade80" />

      {/* ── NAT text ── */}
      <text
        x="34"
        y="44"
        fontFamily="'Arial Black', 'Impact', 'Helvetica Neue', sans-serif"
        fontSize="48"
        fontWeight="900"
        fill={natColor}
        letterSpacing="-1"
      >
        NAT
      </text>

      {/* ── TECHNOLOGIES text ── */}
      <text
        x="35"
        y="55"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="9.5"
        fontWeight="500"
        fill={techColor}
        letterSpacing="5"
      >
        TECHNOLOGIES
      </text>
    </svg>
  );
}
