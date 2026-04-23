import * as React from "react";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentProps<"input"> {
  label?: string;
}

export function Input({ label, className, ...props }: Props) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-1 rounded-lg border px-4 py-2",
        "border-border bg-grey1",
        className
      )}
    >
      <label className="c1-medium text-font-middle">{label}</label>

      <input
        className={cn(
          "h-auto bg-transparent p-0 caret-current outline-none",
          "p2-regular text-font-basic",
          "placeholder:text-font-light"
        )}
        {...props}
      />
    </div>
  );
}
