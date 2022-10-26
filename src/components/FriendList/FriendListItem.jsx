import PropTypes from 'prop-types';

export const FriendListItem = ({ isOnline, name, avatar}) => {
  return (
    <div className="friend-list__item">
      <span className={isOnline ? 'friend__isOnline' : 'friend__isOffline'}></span>
      <img className="friend__avatar" src={ avatar } alt="User avatar" width="48" />
      <p className="friend__name">{ name }</p>
    </div>
  )
}
FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
}
