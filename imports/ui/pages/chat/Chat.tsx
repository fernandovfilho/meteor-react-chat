import React, { useState } from "react";
import { ChatList } from "../../components/chatList/ChatList";
import { ChatsActionBar } from "../../components/chatsActionbar/ChatsActionBar";
import { ChatContainer } from "./Chat.styles";
import { useAuth } from "/imports/api/providers/useAuth";

export const Chat = () => {
  const [showNewChat, setShowNewChat] = useState<boolean>(false);
  const auth = useAuth();

  const logoutAction = () => {
    auth.logout();
  };

  const toggleNewChatAction = () => {
    setShowNewChat(!showNewChat);
  };

  return (
    <ChatContainer>
      <ChatList></ChatList>

      <div></div>
    </ChatContainer>
  );
};
