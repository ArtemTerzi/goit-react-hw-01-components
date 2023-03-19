import { FriendItem, Status, FriendAvatar } from './FriendListItem.styled';

export function FriendListItem({ friends }) {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <FriendItem key={id}>
      <Status className={isOnline ? 'online' : 'offline'} />
      <FriendAvatar src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItem>
  ));
}
