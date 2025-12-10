import { Form } from "@inertiajs/react";
import { useRef } from "react";

export function InputBox() {
  const ref = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const box = ref.current;
    if (box) {
      box.style.height = "auto";
      box.style.height = `${box.scrollHeight + 1}px`; // className="p-1"
    }
  };

  const handleSuccess = () => {
    const box = ref.current;
    if (box) {
      box.value = "";
      box.style.height = "auto";
    }
  };

  return (
    <Form
      action="/chat/message"
      method="post"
      onSuccess={handleSuccess}
      className="flex items-center gap-1.5"
    >
      <textarea
        ref={ref}
        name="content"
        onInput={handleInput}
        className="grow rounded-lg bg-teal-300 p-0.5"
      />
      <button type="submit" className="rounded-md bg-teal-300 p-0.5">
        Send
      </button>
    </Form>
  );
}
