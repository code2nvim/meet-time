import { router } from "@inertiajs/react";
import { Plan } from "../../types/plan.ts";

interface ShowProps {
  planList: Plan[];
}

export default function Show({ planList }: ShowProps) {
  const gotoList = () => {
    router.visit("/plan");
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && gotoList()}
      className="absolute inset-0 flex flex-col items-center justify-center bg-black/50"
    >
      <section className="size-4/5 rounded-md bg-teal-400">
        {planList.map((plan, idx) => (
          <div key={idx}>
            <span>{plan.title}</span>
            <span>{plan.meetAt}</span>
            <span>{plan.meetTime.toString()}</span>
            <span>{plan.desription}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
