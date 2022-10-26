import PropTypes from 'prop-types';

import './ProfileStyle.css';

export const Profile = ({ name, tag, like, views, location, followers, avatar }) => {
  return (
      <div className="profile__container">
        <div className="profile__content">
          <div className='profile__description'>
            <img
              src={avatar}
              alt="User avatar"
              className="profile__avatar"
            />
            <p className="profile__name">{name}</p>
            <p className="profile__tag">{tag}</p>
            <p className="profile__location">{location}</p>
          </div>
          <div className='profile__stats stats'>
            <li className="stats__item">
              <div className="stats__label">Followers</div>
              <div className="stats__quantity">{followers}</div>
            </li>
            <li className="stats__item">
              <div className="stats__label">Views</div>
              <div className="stats__quantity">{views}</div>
            </li>
            <li className="stats__item">
              <div className="stats__label">Likes</div>
              <div className="stats__quantity">{like}</div>
            </li>
          </div>
        </div>
      </div>
  )
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  like: PropTypes.number,
  views: PropTypes.number,
  location: PropTypes.string,
  followers: PropTypes.number,
  avatar: PropTypes.string,
}
