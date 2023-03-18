import user from 'UserData/user.json';
import data from 'UserData/data.json';
import { Container } from './App.styled';
import { Profile } from '../Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Profile {...user} />
      <Statistics title="Upload stats" data={data} />
    </Container>
  );
};
