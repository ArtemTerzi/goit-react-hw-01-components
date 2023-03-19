import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 750px;
  background-color: white;
  box-shadow: 3px 3px 10px 2px #000000;
  margin-bottom: 40px;
`;

export const TransactionsTableHead = styled.thead`
  background-color: #0789b0;
  color: white;
`;

export const TransactionTr = styled.tr`
  :nth-of-type(even) {
    background-color: #e6f3ff;
  }
`;
export const TransactionTh = styled.th`
  padding: 12px;
  text-align: center;
`;

export const TransactionTableBody = styled.tbody`
  text-align: center;
`;

export const TransactionTableData = styled.td`
  font-size: 24px;
  padding: 8px;
`;
