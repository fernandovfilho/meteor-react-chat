import React from "react";
import { ChatList } from "../../components/chatList/ChatList";
import { ChatContainer } from "./Chat.styles";

export const Chat = () => {
  return (
    <ChatContainer>
      <ChatList></ChatList>
      <div></div>
    </ChatContainer>
  );
};
