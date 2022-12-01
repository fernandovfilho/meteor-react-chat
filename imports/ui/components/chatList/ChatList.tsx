import React, { useState } from "react";
import { ChatListActionBar } from "../chatListActionbar/ChatListActionBar";
import { NewChat } from "../newChat/NewChat";
import {
  ChatListContainer,
  ChatListItem,
  ChatListItems,
} from "./ChatList.styles";
import { useAuth } from "/imports/api/providers/useAuth";

export const ChatList = () => {
  const [showNewChat, setShowNewChat] = useState<boolean>(false);
  const auth = useAuth();

  const logoutAction = () => {
    auth.logout();
  };

  const toggleNewChatAction = () => {
    setShowNewChat(!showNewChat);
  };

  return (
    <ChatListContainer>
      <NewChat
        toggleNewChatAction={toggleNewChatAction}
        showNewChat={showNewChat}
      ></NewChat>
      <ChatListActionBar
        userName={auth.user?.name!}
        logoutAction={logoutAction}
        toggleNewChatAction={toggleNewChatAction}
      ></ChatListActionBar>
      <ChatListItems>
        <ChatListItem>item</ChatListItem>
      </ChatListItems>
    </ChatListContainer>
  );
};
