import { Link } from "@inertiajs/react";
import { formatDay } from "../../utils/format.ts";
import { useDateList } from "../../hooks/plan.ts";

interface DayLinkProps {
  date: Date;
}

export function DayLink({ date }: DayLinkProps) {
  const { dateList } = useDateList();

  const dayList = dateList.map((day) => day.getDate());

  const plan = "/plan/" +
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getDate();

  return (
    <Link href={plan}>
      {dayList.includes(date.getDate())
        ? <span className="bg-teal-300 p-2">{formatDay(date)}</span>
        : (
          formatDay(date)
        )}
    </Link>
  );
}
