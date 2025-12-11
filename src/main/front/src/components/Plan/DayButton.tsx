import { ReactNode } from "react";
import { useHover } from "../../hooks/plan.ts";

interface DayButtonProps {
  date: Date;
  children: ReactNode;
}

export function DayButton({ date, children }: DayButtonProps) {
  const { toggle } = useHover();

  return (
    <button type="button" onClick={toggle} className="">
      {children}
    </button>
  );
}
