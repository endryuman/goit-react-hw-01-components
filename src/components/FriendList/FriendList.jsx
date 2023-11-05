import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
export function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
