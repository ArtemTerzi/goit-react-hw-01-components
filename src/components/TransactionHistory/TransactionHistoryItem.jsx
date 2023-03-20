import {
  TransactionTr,
  TransactionTableData,
} from 'components/TransactionHistory/TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({ type, amount, currency }) => (
  <TransactionTr>
    <TransactionTableData>{type}</TransactionTableData>
    <TransactionTableData>{amount}</TransactionTableData>
    <TransactionTableData>{currency}</TransactionTableData>
  </TransactionTr>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
