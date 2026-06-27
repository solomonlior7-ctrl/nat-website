interface LogoProps {
  variant?: "light" | "dark";
}

export default function Logo({ variant = "light" }: LogoProps) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${base}/logo.png`}
      alt="NAT Technologies"
      className="h-12 w-auto"
    />
  );
}
