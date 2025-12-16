import { Form, Link } from "@inertiajs/react";
import { Tanuki } from "../components/Tanuki.tsx";

interface IndexProps {
  user: string;
}

export default function Index({ user }: IndexProps) {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2>User: {user || "No account logged in..."}</h2>
      {user
        ? (
          <>
            <Tanuki />
            <Form action="/logout" method="post" className="contents">
              <button type="submit" className="border p-1">
                Logout
              </button>
            </Form>
          </>
        )
        : (
          <Link href="/login" className="border p-1">
            Login
          </Link>
        )}
    </div>
  );
}
