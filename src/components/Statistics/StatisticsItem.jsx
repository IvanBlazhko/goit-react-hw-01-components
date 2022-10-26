import PropTypes from 'prop-types';

export const StatisticsItem = ({label, percentage}) => {
  return (
    <div className="list__item">
      <span className="list__label">{label}</span>
      <span className="list__percentage">{percentage}%</span>
    </div>
  )
}
StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}







// import PropTypes from 'prop-types';
// import { Statistics } from './Statistics';
//
// function StatisticsITem({ items }) {
//   return (
//     <div>
//       {items.map(item => (
//           <li className="list__tem">
//             <span className="list__label">{item.label}</span>
//             <span className="list__percentage">{item.percentage}</span>
//           </li>))
//       }
//     </div>
//   )
// }
// Statistics.propTypes = {
//   label: PropTypes.string,
//   percentage: PropTypes.number,
// }
// export default StatisticsITem
