import { Fragment } from "react";
import { DayLink } from "./DayLink.tsx";

interface CalendarProps {
  start: Date;
}

export function Calendar({ start }: CalendarProps) {
  const first = new Date(start.getFullYear(), start.getMonth(), 1);
  const weekStart = new Date(first);
  weekStart.setDate(first.getDate() - first.getDay());

  const weeks = Array.from({ length: 6 }).reduce<Date[]>((prev, _, i) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i * 7);
    return [...prev, date];
  }, []);

  const month = start.getMonth();

  return (
    <table className="text-4xl">
      <thead>
        <tr className="grid grid-cols-7 p-2 text-center">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((start, idx) => (
          <Week key={idx} start={start} month={month} />
        ))}
      </tbody>
    </table>
  );
}

interface WeekProps {
  start: Date;
  month: number;
}

function Week({ start, month }: WeekProps) {
  const day = start.getDay();
  const sunday = new Date(start);
  sunday.setDate(start.getDate() - day);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + i);
    return date;
  });

  const end = new Date(start);
  end.setDate(start.getDate() + 6);

  return (
    <tr className="grid grid-cols-7">
      {dates.map((date, idx) => (
        <Fragment key={idx}>
          {(start.getMonth() === month || end.getMonth() === month) && (
            <td className="flex aspect-4/3 w-32 items-center justify-center border p-2">
              {date.getMonth() === month && <DayLink date={date} />}
            </td>
          )}
        </Fragment>
      ))}
    </tr>
  );
}
