import PropTypes from 'prop-types';

export const TransactionHistoryListItem = ({  amount, type, currency }) => {
  return (
    <div className="history__row">
      <div className="history__item">{ type }</div>
      <div className="history__item">{ amount }</div>
      <div className="history__item">{ currency }</div>
    </div>
  )
}
TransactionHistoryListItem.propTypes = {
  amount: PropTypes.string,
  type: PropTypes.string,
  currency: PropTypes.string,
}
