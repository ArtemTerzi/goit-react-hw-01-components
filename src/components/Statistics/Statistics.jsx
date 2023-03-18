import {
  StatisticsWrapper,
  StatisticsTitle,
  StatList,
} from './Statistics.styled';
import { statisticsItemMaker } from './statisticsItemMaker';

export const Statistics = ({ title, data }) => (
  <StatisticsWrapper>
    <StatisticsTitle>{title}</StatisticsTitle>
    <StatList>{statisticsItemMaker(data)}</StatList>
  </StatisticsWrapper>
);
