import { atom, useAtom } from "jotai";

const hoverAtom = atom(false);

export function useHover() {
  const [hover, setHover] = useAtom(hoverAtom);

  const toggle = () => setHover((hover) => !hover);

  return { hover, toggle };
}
