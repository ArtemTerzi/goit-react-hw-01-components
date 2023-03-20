import {
  TransactionHistoryTable,
  TransactionsTableHead,
  TransactionTr,
  TransactionTh,
  TransactionTableBody,
} from 'components/TransactionHistory/TransactionHistory.styled';
import { TransactionHistoryItem } from 'components/TransactionHistory/TransactionHistoryItem';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <TransactionHistoryTable>
    <TransactionsTableHead>
      <TransactionTr>
        <TransactionTh>Type</TransactionTh>
        <TransactionTh>Amount</TransactionTh>
        <TransactionTh>Currency</TransactionTh>
      </TransactionTr>
    </TransactionsTableHead>

    <TransactionTableBody>
      {items.map(({ id, type, amount, currency }) => (
        <TransactionHistoryItem
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
      ))}
    </TransactionTableBody>
  </TransactionHistoryTable>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
