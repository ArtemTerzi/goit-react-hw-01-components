import { FriendItem, Status, FriendAvatar } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <FriendItem key={id}>
    <Status isOnline={isOnline} />
    <FriendAvatar src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </FriendItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
