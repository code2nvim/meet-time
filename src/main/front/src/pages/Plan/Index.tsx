import { Link } from "@inertiajs/react";
import { ReactElement } from "react";
import { Calendar } from "../../components/Plan/Calendar.tsx";
import { formatMonth } from "../../utils/format.ts";

interface IndexProps {
  localDate: string;
  children: ReactElement;
}

export default function Index({ localDate, children }: IndexProps) {
  const date = new Date(localDate);
  const start = new Date(date.getFullYear(), date.getMonth(), 1);

  return (
    <div className="flex inset-0 flex-col items-center gap-1 p-1">
      <SelectMonth date={date} />
      <Calendar start={start} />
      {children}
    </div>
  );
}

interface SelectMonthProps {
  date: Date;
}

function SelectMonth({ date }: SelectMonthProps) {
  const prev = new Date(date);
  const next = new Date(date);

  prev.setMonth(date.getMonth() - 1);
  next.setMonth(date.getMonth() + 1);

  const prevRoute = "/plan/" + prev.getFullYear() + "/" + (prev.getMonth() + 1);
  const nextRoute = "/plan/" + next.getFullYear() + "/" + (next.getMonth() + 1);

  return (
    <nav className="flex items-center gap-8 p-4 text-2xl">
      <Link type="button" href={prevRoute} className="rounded-md border-2 p-1">
        prev
      </Link>
      <h2 className="font-bold">
        {formatMonth(date)}
      </h2>
      <Link type="button" href={nextRoute} className="rounded-md border-2 p-1">
        next
      </Link>
    </nav>
  );
}
