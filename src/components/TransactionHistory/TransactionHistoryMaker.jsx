import {
  TransactionTr,
  TransactionTableData,
} from 'components/TransactionHistory/TransactionHistory.styled';

export function TransactionHistoryMaker({ items }) {
  return items.map(({ id, type, amount, currency }) => (
    <TransactionTr key={id}>
      <TransactionTableData>{type}</TransactionTableData>
      <TransactionTableData>{amount}</TransactionTableData>
      <TransactionTableData>{currency}</TransactionTableData>
    </TransactionTr>
  ));
}
