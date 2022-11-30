import React from "react";
import {
  ActionIcon,
  ChatsActionBarContainer,
  UserName,
} from "./ChatsActionbar.styles";

export const ChatsActionBar = ({
  userName,
  logoutAction,
  toggleNewChatAction,
}: {
  userName: string;
  logoutAction: () => void;
  toggleNewChatAction: () => void;
}) => (
  <ChatsActionBarContainer>
    <ActionIcon
      onClick={() => {
        logoutAction();
      }}
      src="/img/logout.svg"
    ></ActionIcon>
    <UserName>{userName}</UserName>
    <ActionIcon
      onClick={() => {
        toggleNewChatAction();
      }}
      src="/img/new-chat.svg"
    ></ActionIcon>
  </ChatsActionBarContainer>
);
