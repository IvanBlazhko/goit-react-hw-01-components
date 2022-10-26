import PropTypes from 'prop-types';

import { FriendListItem } from "./FriendListItem";

import './FriendListStyle.css'

export const FriendList = ({ items }) => {
  return (
      <section className="friends__container">
        <div className='friends__content'>
          <h2 className="friends__title">Friend Item</h2>
          <div className="friends__list">
            {items.map(item =>
              <FriendListItem
                key={item.id}
                avatar={item.avatar}
                name={item.name}
                isOnline={item.isOnline}
              />
            )}
          </div>
        </div>
      </section>
  )
}
FriendList.propTypes = {
  props: PropTypes.array
}
