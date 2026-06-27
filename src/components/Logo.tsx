import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
}

export default function Logo(_props: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="NAT Technologies"
      width={180}
      height={48}
      className="h-12 w-auto"
      priority
    />
  );
}
