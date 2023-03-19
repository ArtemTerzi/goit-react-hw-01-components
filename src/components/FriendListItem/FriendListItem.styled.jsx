import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  width: 300px;
  background-color: white;
  padding: 24px;
  box-shadow: 3px 3px 10px 2px #000000;
  margin-bottom: 12px;
  transition: all 300ms;

  :hover,: focus {
    scale: 1.05;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: grey;
  border-radius: 20px;
  margin-right: 8px;

  &.offline {
    background-color: red;
  }

  &.online {
    background-color: green;
  }
`;

export const FriendAvatar = styled.img`
  margin-right: 12px;
`;
