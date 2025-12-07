import { Form, Link } from "@inertiajs/react";

export default function Create() {
  return (
    <>
      <section className="w-full p-2">
        <Link href="/" className="border">
          Back to Home
        </Link>
        <h1 className="text-center text-xl">Create an account</h1>
      </section>
      <Form
        action="/login/create"
        method="post"
        className="flex flex-col items-center gap-1.5"
      >
        <span className="grid grid-cols-3 gap-1">
          <label className="text-right">User:</label>
          <input
            type="text"
            name="username"
            className="border bg-teal-300 p-0.5"
          />
        </span>
        <span className="grid grid-cols-3 gap-1">
          <label className="text-right">Password:</label>
          <input
            type="password"
            name="password"
            className="border bg-teal-300 p-0.5"
          />
        </span>
        <button type="submit" className="border bg-teal-300 p-0.5">
          Create
        </button>
      </Form>
    </>
  );
}
