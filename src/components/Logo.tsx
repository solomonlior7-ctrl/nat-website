import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
}

export default function Logo({ variant = "light" }: LogoProps) {
  return (
    <div className={`inline-flex items-center rounded-xl px-3 py-1.5 ${
      variant === "light" ? "bg-white/95" : "bg-white"
    }`}>
      <Image
        src="/logo.png"
        alt="NAT Technologies"
        width={160}
        height={40}
        className="h-9 w-auto"
        priority
      />
    </div>
  );
}
