import PropTypes from 'prop-types';

import { StatisticsItem } from './StatisticsItem';

import './StatisticsStyle.css'

export const Statistics = ({ items, title }) => {
  console.log(true ?? 'Upload stats');
  return (
      <section className="statistics__container">
        <div className='statistics__content'>
          { title && <h2 className='statistics__title'>{ title }</h2> }
          <div className="statistics__list list">
            {items.map(item =>
              <StatisticsItem
                key={item.id}
                label={item.label}
                percentage={item.percentage}
              />
            )}
          </div>
        </div>
      </section>
  )
}

Statistics.propTypes = {
  props: PropTypes.array
}

