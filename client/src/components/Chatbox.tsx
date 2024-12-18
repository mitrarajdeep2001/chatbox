import { useEffect, useState } from "react";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ChatHeader from "./ChatHeader";
import Logo from "./svgs/Logo";
import axiosInstance from "@/lib/axiosInstance";
import { useAuth } from "@/context/AuthProvider";
import { useSocket } from "@/context/SocketProvider";
import { getSocket } from "@/lib/socketService";

const Chatbox = ({ id }: { id: string | null }) => {
  const { user } = useAuth();
  const { joinRoom, socket } = useSocket();
  const [chatData, setChatData] = useState(null);

  // get chat data
  const getChatData = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/chat/${id}?userId=${user?.uid}`
      );
      setChatData(data);
    } catch (error) {
      console.log("getChatData() ->>", error);
    }
  };
  useEffect(() => {
    if (id) {
      getChatData();
      joinRoom(id);
    }
  }, [id]);

  return (
    <div className="w-[70%] flex flex-col justify-between h-screen">
      {typeof id === "string" ? (
        <>
          <ChatHeader chatData={chatData} />
          <ChatBody chatData={chatData} />
          <ChatFooter chatData={chatData} />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <Logo width={200} height={200} />
          <h4 className="text-3xl font-bold dark:text-light-primary text-dark-primary">
            ChatBox
          </h4>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
