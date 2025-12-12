import { atom, useAtom } from "jotai";

const dateListAtom = atom([] as Date[]);

export function useDateList() {
  const [dateList, setDateList] = useAtom(dateListAtom);

  return { dateList, setDateList };
}
