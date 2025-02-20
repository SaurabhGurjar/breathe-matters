import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      width={260}
      height={58}
      alt="breathe-matters-logo"
    />
  );
}
