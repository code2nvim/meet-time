import { ChatRoom } from "../../components/Chat/ChatRoom.tsx";
import { RoomList } from "../../components/Chat/RoomList.tsx";
import { useUsername } from "../../hooks/account.ts";
import { Account } from "../../types/account.ts";

interface IndexProps {
  account: Account;
}

export default function Index({ account }: IndexProps) {
  const { setUsername } = useUsername();

  setUsername(account.username);

  return (
    <div className="flex size-full gap-1 p-1">
      <RoomList />
      <ChatRoom />
    </div>
  );
}
