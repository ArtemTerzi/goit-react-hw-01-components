import PropTypes from 'prop-types';

import {
  StatisticsItem,
  StatisticsItemLabel,
  StatisticsItemValue,
} from './Statistics.styled';
import { getRandomColor } from 'utils/getRandomColor';

export const StatisticItem = ({ label, percentage }) => (
  <StatisticsItem style={{ backgroundColor: `${getRandomColor()}` }}>
    <StatisticsItemLabel>{label}</StatisticsItemLabel>
    <StatisticsItemValue>{percentage}%</StatisticsItemValue>
  </StatisticsItem>
);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
