interface LogoProps {
  variant?: "light" | "dark";
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const natColor  = variant === "light" ? "#FFFFFF" : "#071A31";
  const techColor = variant === "light" ? "rgba(255,255,255,0.70)" : "#374151";
  const lineColor = variant === "light" ? "rgba(255,255,255,0.25)" : "#E5E7EB";

  return (
    <svg
      viewBox="0 0 310 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-auto"
      aria-label="NAT Technologies"
    >
      {/* N */}
      <path
        d="M4 8 L4 56 L18 56 L18 32 L34 56 L48 56 L48 8 L34 8 L34 32 L18 8 Z"
        fill={natColor}
      />
      {/* Gold triangle accent on N */}
      <polygon points="4,8 26,8 4,30" fill="#2584F4" />
      {/* A */}
      <path
        d="M58 56 L74 8 L90 8 L106 56 L92 56 L90 48 L74 48 L72 56 Z M78 38 L86 38 L82 18 Z"
        fill={natColor}
      />
      {/* T */}
      <path
        d="M114 8 L158 8 L158 20 L143 20 L143 56 L129 56 L129 20 L114 20 Z"
        fill={natColor}
      />
      {/* Separator */}
      <rect x="172" y="14" width="1.5" height="36" fill={lineColor} rx="1" />
      {/* TECHNOLOGIES */}
      <text
        x="184"
        y="46"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill={techColor}
        letterSpacing="2"
      >
        TECHNOLOGIES
      </text>
    </svg>
  );
}
