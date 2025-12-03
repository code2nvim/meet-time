import { ReactElement } from "react";
import Tools from "./Tools.tsx";

interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="absolute flex size-full justify-end">
      <main className="absolute size-full">{children}</main>
      <Tools />
    </div>
  );
}
