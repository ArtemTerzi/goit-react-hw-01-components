import {
  StatisticsWrapper,
  StatisticsTitle,
  StatList,
} from './Statistics.styled';
import { statisticsItemMaker } from './statisticsItemMaker';
import PropTypes from 'prop-types';

export const Statistics = ({ title, data }) => (
  <StatisticsWrapper>
    <StatisticsTitle>{title}</StatisticsTitle>
    <StatList>{statisticsItemMaker(data)}</StatList>
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
