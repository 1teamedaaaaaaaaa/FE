"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
}

export default function BackButton({ href }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length <= 1) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <button onClick={handleBack} aria-label="뒤로 이동">
      <ChevronLeft size={24} />
    </button>
  );
}
