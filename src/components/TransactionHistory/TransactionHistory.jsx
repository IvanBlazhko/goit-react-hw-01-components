import PropTypes from 'prop-types';

import { TransactionHistoryListItem } from './TransactionHistoryListItem'

import './TransactionHistoryStyle.css';

export const TransactionHistory = ({ items }) => {
  return (
      <section className="history__container">
        <div className='history__content'>
          <div className="history__head">
              <div className="history__title">Type</div>
              <div className="history__title">Amount</div>
              <div className="history__title">Currency</div>
          </div>
            <div className="history__list">
              {items.map(item =>
                <TransactionHistoryListItem
                  key={item.id}
                  id={item.id}
                  type={item.type}
                  amount={item.amount}
                  currency={item.currency}
                />
              )}
            </div>
        </div>
      </section>
  )
}
TransactionHistory.propTypes = {
  props: PropTypes.array
}
