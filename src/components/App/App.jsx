import { Profile } from '../Profile/Profile';
import user from 'UserData/user.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile {...user}></Profile>
    </Container>
  );
};
