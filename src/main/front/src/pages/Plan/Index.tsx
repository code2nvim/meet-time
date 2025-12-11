import { Calendar } from "../../components/Plan/Calendar.tsx";
import { Hover } from "../../components/Plan/Hover.tsx";

export default function Index() {
  return (
    <div className="flex flex-col items-center size-full gap-1 p-1">
      <Calendar start={new Date(2025, 11, 1)} />
      <Hover />
    </div>
  );
}
