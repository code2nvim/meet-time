import { useEffect, useState } from "react";
import { useUsername } from "../../hooks/chat.ts";
import { Message } from "../../types/Message.ts";
import { InputBox } from "./InputBox.tsx";

export function useGetMessages(): Message[] {
  const [messages, setMessages] = useState([] as Message[]);

  useEffect(() => {
    const source = new EventSource("/chat/message");

    source.onmessage = (event) => {
      setMessages(JSON.parse(event.data));
    };

    return () => {
      source.close();
    };
  }, []);

  return messages;
}

export function ChatRoom() {
  const messages = useGetMessages();

  const { username } = useUsername();

  return (
    <section className="flex gap-1 grow flex-col">
      <ul className="size-full gap-4 overflow-auto rounded-md bg-teal-500 p-4">
        {messages.map((message, idx) => (
          <li
            key={message.id}
            className={`flex ${message.sentFrom == username && "justify-end"}`}
          >
            <div className="flex flex-col">
              {(idx == 0 || messages[idx - 1].sentFrom != message.sentFrom) && ( // consecutive messages
                <label className="p-1">
                  {message.sentFrom != username && message.sentFrom + ": "}
                </label>
              )}
              <p className="my-1 flex rounded-md bg-teal-400 p-2">
                {message.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <InputBox />
    </section>
  );
}
