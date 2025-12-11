import { useState } from "react";
import { Calendar } from "../../components/Plan/Calendar.tsx";
import { Hover } from "../../components/Plan/Hover.tsx";

export default function Index() {
  const [date, setDate] = useState(new Date());

  const prevMonth = () => {
    const month = new Date(date);
    month.setMonth(month.getMonth() - 1);
    setDate(month);
  };

  const nextMonth = () => {
    const month = new Date(date);
    month.setMonth(month.getMonth() + 1);
    setDate(month);
  };

  const start = new Date(date.getFullYear(), date.getMonth(), 1);

  return (
    <div className="flex size-full flex-col items-center gap-1 p-1">
      <SelectMonth date={date} prev={prevMonth} next={nextMonth} />
      <Calendar start={start} />
      <Hover />
    </div>
  );
}

interface SelectMonthProps {
  date: Date;
  prev: () => void;
  next: () => void;
}

function SelectMonth({ date, prev, next }: SelectMonthProps) {
  return (
    <nav className="flex items-center gap-8 p-4 text-2xl">
      <button type="button" onClick={prev} className="border-2 p-1">
        prev
      </button>
      <h2 className="font-bold">{date.getMonth() + 1}</h2>
      <button type="button" onClick={next} className="border-2 p-1">
        next
      </button>
    </nav>
  );
}
