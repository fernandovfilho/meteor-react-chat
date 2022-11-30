import styled from "styled-components";

export const ChatsActionBarContainer = styled.div`
  display: flex;
  background-color: var(--action-bar-background);
  height: 62px;
  max-width: 360px;
  width: 33%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.span`
  color: var(--font-color-light);
  font-size: var(--font-size-default);
  flex: 1;
`;

export const ActionIcon = styled.img`
  width: 30px;
  height: 30px;
  padding: 20px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    filter: brightness(80%);
  }
`;
