import {
  TransactionHistoryTable,
  TransactionsTableHead,
  TransactionTr,
  TransactionTh,
  TransactionTableBody,
} from 'components/TransactionHistory/TransactionHistory.styled';
import { TransactionHistoryMaker } from 'components/TransactionHistory/TransactionHistoryMaker';
import PropTypes from 'prop-types';

export const TransactionHistory = items => (
  <TransactionHistoryTable>
    <TransactionsTableHead>
      <TransactionTr>
        <TransactionTh>Type</TransactionTh>
        <TransactionTh>Amount</TransactionTh>
        <TransactionTh>Currency</TransactionTh>
      </TransactionTr>
    </TransactionsTableHead>

    <TransactionTableBody>
      {TransactionHistoryMaker(items)}
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
