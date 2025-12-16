import { Form } from "@inertiajs/react";

export function Create() {
  return (
    <div>
      <h1 className="text-center text-xl">Create a plan</h1>
      <Form
        action={location.pathname}
        method="post"
        className="flex flex-col items-start gap-1.5 p-4"
      >
        <label className="text-right">Title:</label>
        <input type="text" name="title" className="border bg-teal-300 p-0.5" />
        <label className="text-right">Place:</label>
        <input type="text" name="meetAt" className="border bg-teal-300 p-0.5" />
        <label className="text-right">Time:</label>
        <input
          type="text"
          name="meetTime"
          className="border bg-teal-300 p-0.5"
        />
        <label className="text-right">Description:</label>
        <input
          type="text"
          name="description"
          className="h-48 w-full border bg-teal-300 p-0.5"
        />
        <button type="submit" className="mx-auto border bg-teal-300 p-0.5">
          Create
        </button>
      </Form>
    </div>
  );
}
