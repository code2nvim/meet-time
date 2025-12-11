import { Link, router } from "@inertiajs/react";
import { Account } from "../../types/account.ts";

interface PendingProps {
  pending: Account[];
}

export default function Pending({ pending }: PendingProps) {
  const accept = (username: string) => {
    router.post("/login/pending/accept", { username });
  };

  const deny = (username: string) => {
    router.post("/login/pending/deny", { username });
  };

  return (
    <>
      <section className="w-full">
        <Link href="/" className="border">
          Back to Home
        </Link>
        <h1 className="text-center text-lg">Pending accounts</h1>
      </section>
      <div className="flex flex-col items-center">
        {pending.map((account, index) => (
          <span
            key={index}
            className="flex items-center gap-1 rounded-md bg-teal-300 p-2"
          >
            {account.username}: {account.password}
            <button
              type="button"
              onClick={() => accept(account.username)}
              className="w-8 rounded-md border p-0.5"
            >
              ⭕️
            </button>
            <button
              type="button"
              onClick={() => deny(account.username)}
              className="w-8 rounded-md border p-0.5"
            >
              ❌
            </button>
          </span>
        ))}
      </div>
    </>
  );
}
