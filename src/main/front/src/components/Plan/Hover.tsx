import { useHover } from "../../hooks/plan.ts";

export function Hover() {
  const { hover, toggle } = useHover();

  return (
    <>
      {hover && (
        <div
          onClick={(e) => e.target === e.currentTarget && toggle()}
          className="absolute inset-0 flex items-center justify-center bg-black/50"
        >
          <section
            onClick={(e) => e.stopPropagation()}
            className="size-3/4 rounded-md bg-teal-400"
          >
            Hover
          </section>
        </div>
      )}
    </>
  );
}
