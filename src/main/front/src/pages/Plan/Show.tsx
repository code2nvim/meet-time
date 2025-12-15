import { router } from "@inertiajs/react";
import { useState } from "react";
import { Create } from "../../components/Plan/Create.tsx";
import { ShowList } from "../../components/Plan/ShowList.tsx";
import { Plan } from "../../types/plan.ts";

interface ShowProps {
  planList: Plan[];
}

export default function Show({ planList }: ShowProps) {
  const [curr, setCurr] = useState("list" as "create" | "list");

  const gotoList = () => {
    router.visit("/plan");
  };

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && gotoList()}
      className="absolute inset-0 flex flex-col items-center justify-center bg-black/50"
    >
      <section className="size-4/5 flex flex-col rounded-md bg-teal-400">
        <nav className="h-10 w-full grid grid-cols-2">
          <button
            type="button"
            onClick={() => setCurr("list")}
            className="grow border border-teal-600"
          >
            List
          </button>
          <button
            type="button"
            onClick={() => setCurr("create")}
            className="grow border border-teal-600"
          >
            Create
          </button>
        </nav>
        {curr === "list" && <ShowList planList={planList} />}
        {curr === "create" && <Create />}
      </section>
    </div>
  );
}
