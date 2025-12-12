import { Link } from "@inertiajs/react";
import { Calendar } from "../../components/Plan/Calendar.tsx";
import { Hover } from "../../components/Plan/Hover.tsx";

interface IndexProps {
  timestamp: number;
}

export default function Index({ timestamp }: IndexProps) {
  const date = new Date(timestamp);
  const start = new Date(date.getFullYear(), date.getMonth(), 1);

  return (
    <div className="flex size-full flex-col items-center gap-1 p-1">
      <SelectMonth date={date} />
      <Calendar start={start} />
      <Hover />
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
      <Link type="button" href={prevRoute} className="border-2 rounded-md p-1">
        prev
      </Link>
      <h2 className="font-bold">{date.getMonth() + 1}</h2>
      <Link type="button" href={nextRoute} className="border-2 rounded-md p-1">
        next
      </Link>
    </nav>
  );
}
