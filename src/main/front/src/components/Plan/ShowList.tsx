import { router } from "@inertiajs/react";
import { Plan } from "../../types/plan.ts";

interface ShowListProps {
  planList: Plan[];
}

export function ShowList({ planList }: ShowListProps) {
  const remove = (plan: Plan) => {
    const path = location.pathname;
    router.delete(path + "/" + plan.id);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {planList.map((plan, idx) => (
        <div key={idx} className="relative flex flex-col rounded-md border p-2">
          <span>{plan.title}</span>
          <span>{plan.meetAt}</span>
          <span>{plan.meetTime.toString()}</span>
          <span>{plan.description}</span>
          <button
            type="button"
            onClick={() =>
              remove(plan)}
            className="absolute right-2 bottom-2 rounded-md border p-0.5"
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
}
