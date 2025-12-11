import { DayButton } from "./DayButton.tsx";

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
      <thead className="grid grid-cols-7 p-2 text-center">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((date) => (
          <th key={date}>{date}</th>
        ))}
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
        <>
          {(start.getMonth() === month ||
            end.getMonth() === month) &&
            (
              <td
                key={idx}
                className="flex aspect-4/3 items-center justify-center border p-2"
              >
                {date.getMonth() === month && (
                  <DayButton date={date}>
                    {`${date.getMonth() + 1}/${
                      date.getDate().toString().padStart(2, "0")
                    }`}
                  </DayButton>
                )}
              </td>
            )}
        </>
      ))}
    </tr>
  );
}
