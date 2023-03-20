import {
  StatisticsWrapper,
  StatisticsTitle,
  StatList,
} from './Statistics.styled';
import { StatisticItem } from './StatisticItem';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => (
  <StatisticsWrapper>
    {title && <StatisticsTitle>{title}</StatisticsTitle>}
    <StatList>
      {data.map(({ id, label, percentage }) => (
        <StatisticItem key={id} label={label} percentage={percentage} />
      ))}
    </StatList>
  </StatisticsWrapper>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
