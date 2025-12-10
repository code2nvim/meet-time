import { ChatRoom } from "../../components/Chat/ChatRoom.tsx";
import { RoomList } from "../../components/Chat/RoomList.tsx";
import { useUsername } from "../../hooks/chat.ts";
import { Account } from "../../types/Account.ts";

interface IndexProps {
  account: Account;
}

export default function Index({ account }: IndexProps) {
  const { setUsername } = useUsername();

  setUsername(account.username);

  return (
    <div className="flex size-full p-1 gap-1">
      <RoomList />
      <ChatRoom />
    </div>
  );
}
