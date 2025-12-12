import { Link } from "@inertiajs/react";
import { formatDay } from "../../utils/format.ts";

interface DayLinkProps {
  date: Date;
}

export function DayLink({ date }: DayLinkProps) {
  const plan = "/plan/" +
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getDate();

  return (
    <Link href={plan}>
      {formatDay(date)}
    </Link>
  );
}
