import { atom, useAtom } from "jotai";

const usernameAtom = atom<string>();

export function useUsername() {
  const [username, setUsername] = useAtom(usernameAtom);

  return { username, setUsername };
}
