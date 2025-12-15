import { Plan } from "../../types/plan.ts";

interface ShowListProps {
  planList: Plan[];
}

export function ShowList({ planList }: ShowListProps) {
  return (
    <>
      {planList.map((plan, idx) => (
        <div key={idx} className="flex flex-col">
          <span>{plan.id}</span>
          <span>{plan.title}</span>
          <span>{plan.meetAt}</span>
          <span>{plan.meetTime.toString()}</span>
          <span>{plan.description}</span>
        </div>
      ))}
    </>
  );
}
