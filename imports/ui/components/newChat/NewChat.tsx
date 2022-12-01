import React from "react";
import { ActionIcon } from "../../layouts/icon.styles";
import {
  NewChatActionBar,
  NewChatContainer,
  NewChatItems,
  NewChatTitle,
} from "./NewChat.styles";

export const NewChat = ({
  showNewChat,
  toggleNewChatAction,
}: {
  showNewChat: boolean;
  toggleNewChatAction: () => void;
}) => {
  if (showNewChat) {
    return (
      <NewChatContainer>
        <NewChatActionBar>
          <ActionIcon
            onClick={() => {
              toggleNewChatAction();
            }}
            src="/img/arrow-back.svg"
          ></ActionIcon>
          <NewChatTitle>New chat</NewChatTitle>
        </NewChatActionBar>
        <NewChatItems></NewChatItems>
      </NewChatContainer>
    );
  }
  return <></>;
};
