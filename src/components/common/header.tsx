import CircleUserRound from "@/components/ui/circle-user-round";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import BackButton from "@/components/common/back-button";

type HeaderVariant = "default" | "logo-only" | "back";

interface HeaderProps {
  variant?: HeaderVariant;
  backHref?: string;
}

export default async function Header({ variant = "default", backHref = "/" }: HeaderProps) {
  if (variant === "logo-only") {
    return (
      <div className="sticky top-0 z-40 flex h-14 w-full items-center justify-center bg-white">
        <Link href="/">
          <Image src={"/full-logo.svg"} alt="Logo" width={104} height={20} />
        </Link>
      </div>
    );
  }

  if (variant === "back") {
    return (
      <div className="sticky top-0 z-40 flex h-14 w-full items-center justify-between bg-white">
        <BackButton href={backHref} />
      </div>
    );
  }

  const isLoggedIn = (await cookies()).has("isLoggedIn");

  return (
    <div className="sticky top-0 z-40 flex h-14 w-full items-center justify-between bg-white">
      <Link href="/">
        <Image src={"/logo.svg"} alt="Logo" width={56} height={14} />
      </Link>
      {isLoggedIn && (
        <Link href="/mypage">
          <CircleUserRound size={24} />
        </Link>
      )}
    </div>
  );
}
