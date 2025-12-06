import { usePage } from "@inertiajs/react";
import { ReactElement } from "react";
import Menu from "./Menu.tsx";

interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const { component } = usePage();
  const [page] = component.split("/");

  return (
    <div className="absolute flex size-full flex-col bg-teal-500">
      <header className="flex w-full justify-between bg-gray-800 p-1 text-lg text-white">
        {page}
        <Menu />
      </header>
      <main className="grow">{children}</main>
    </div>
  );
}
