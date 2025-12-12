import { atom, useAtom } from "jotai";

const planListAtom = atom<Date[]>();

export function useUsername() {
  const [plan, setPlanList] = useAtom(planListAtom);

  return { plan, setPlanList };
}
