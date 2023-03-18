import styled from '@emotion/styled';

export const StatisticsWrapper = styled.section`
  margin-top: 40px;
  padding: 8px;
  border-radius: 16px;
  text-align: center;
  background-color: white;
  border: 2px solid #ffff4d;
  transition: all 300ms;
  width: 750px;

  :hover,
  :focus {
    scale: 1.05;
    box-shadow: 1px 1px 2px 3px #929292;
`;

export const StatisticsTitle = styled.h2`
  margin: 24px auto;
  text-transform: uppercase;
  font-size: 32px;
  color: #929292;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: white;
  padding: 24px;
`;

export const StatisticsItemLabel = styled.span`
  font-size: 24px;
  margin-bottom: 12px;
`;

export const StatisticsItemValue = styled.span`
  font-weight: 700;
`;
