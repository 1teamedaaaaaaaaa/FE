"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="cursor-pointer" onClick={() => router.back()} aria-label="뒤로 이동">
      <ChevronLeft size={32} />
    </button>
  );
}
