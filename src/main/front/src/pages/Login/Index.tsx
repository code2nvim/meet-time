import { Form, Link } from "@inertiajs/react";

export default function Index() {
  return (
    <>
      <Link href="/" className="border">
        Back to Home
      </Link>
      <Form
        action="/login"
        method="post"
        className="flex flex-col items-center gap-1"
      >
        <input type="text" name="username" className="border" />
        <input type="password" name="password" className="border" />
        <button type="submit">Login</button>
      </Form>
    </>
  );
}
