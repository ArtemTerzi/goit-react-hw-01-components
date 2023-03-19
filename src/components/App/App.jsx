import user from 'UserData/user.json';
import data from 'UserData/data.json';
import friends from 'UserData/friends.json';
import transactions from 'UserData/transactions.json';
import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile {...user} />
      <Statistics title="Upload stats" data={data} />
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </Container>
  );
};
