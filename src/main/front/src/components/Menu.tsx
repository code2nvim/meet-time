import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function Menu() {
  const [show, setShow] = useState(false);

  const toggle = () => setShow((show) => !show);

  return (
    <>
      <button
        type="button"
        onClick={toggle}
        className="flex aspect-square flex-col items-center justify-evenly rounded-md border bg-gray-700 p-1"
      >
        <span className="block h-0.5 w-5 bg-white"></span>
        <span className="block h-0.5 w-5 bg-white"></span>
        <span className="block h-0.5 w-5 bg-white"></span>
      </button>
      {show && (
        <div
          onClick={toggle}
          className="absolute inset-0 flex items-center justify-center bg-black/50"
        >
          <section className="flex size-3/4 flex-col justify-evenly gap-16 rounded-md bg-teal-400 p-16">
            <RouteLink route="/chat">Chat</RouteLink>
            <RouteLink route="/plan">Calendar</RouteLink>
            <RouteLink route="/">TODO</RouteLink>
          </section>
        </div>
      )}
    </>
  );
}

interface RouteLinkProps {
  route: string;
  children: string;
}

function RouteLink({ route, children }: RouteLinkProps) {
  return (
    <Link href={route} className="grow rounded-md border-2 flex text-2xl text-gray-700 justify-center items-center">
      {children}
    </Link>
  );
}
