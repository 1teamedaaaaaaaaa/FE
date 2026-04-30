"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function LoginErrorToast() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const withdrawnAt = searchParams.get("withdrawnAt");

  useEffect(() => {
    if (error !== "withdrawn") return;
    const message = withdrawnAt ? (
      <span>
        {withdrawnAt}에 탈퇴처리된 계정입니다.
        <br />
        90일 이후 재가입 가능합니다.
      </span>
    ) : (
      <span>
        탈퇴처리된 계정입니다.
        <br />
        90일 이후 재가입 가능합니다.
      </span>
    );
    toast.error(message, { duration: 3000 });
  }, [error, withdrawnAt]);

  return null;
}
