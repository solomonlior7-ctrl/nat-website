import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
}

export default function Logo({ variant = "light" }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="NAT Technologies"
      width={180}
      height={50}
      className={`h-12 w-auto ${variant === "light" ? "brightness-110" : ""}`}
      priority
    />
  );
}
