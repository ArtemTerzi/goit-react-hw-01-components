import {
  StatisticsItem,
  StatisticsItemLabel,
  StatisticsItemValue,
} from './Statistics.styled';
import { getRandomColor } from 'utils/getRandomColor';

export function statisticsItemMaker(data) {
  return data.map(({ id, label, percentage }) => (
    <StatisticsItem key={id} style={{ backgroundColor: `${getRandomColor()}` }}>
      <StatisticsItemLabel>{label}</StatisticsItemLabel>
      <StatisticsItemValue>{percentage}%</StatisticsItemValue>
    </StatisticsItem>
  ));
}
