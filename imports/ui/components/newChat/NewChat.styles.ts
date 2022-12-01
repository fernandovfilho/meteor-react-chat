import styled from "styled-components";

export const NewChatContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const NewChatActionBar = styled.div`
  display: flex;
  background-color: var(--action-bar-background);
  height: 62px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const NewChatTitle = styled.span`
  color: var(--font-color-light);
  font-size: var(--font-size-default);
  flex: 1;
`;

export const NewChatItems = styled.div`
  background-color: var(--background-color-light);
  flex: auto;
  overflow-y: auto;
`;

export const NewChatItem = styled.div`
  background-color: var(--background-color-light);
  flex: auto;
  overflow-y: auto;
`;
