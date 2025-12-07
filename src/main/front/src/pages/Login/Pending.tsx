import { Form, Link } from "@inertiajs/react";
import { Account } from "../../types/Account.ts";

interface PendingProps {
  pending: Account[];
}

export default function Pending({ pending }: PendingProps) {
  return (
    <>
      <section className="w-full">
        <Link href="/" className="border">
          Back to Home
        </Link>
        <h1 className="text-center text-lg">Pending accounts</h1>
      </section>
      {pending.map((account, index) => (
        <Form
          key={index}
          action="/login/pending"
          method="post"
          className="flex flex-col items-center gap-2"
        >
          {account.username}
          <button type="submit" className="border bg-teal-300 p-0.5">
            Create
          </button>
        </Form>
      ))}
    </>
  );
}
