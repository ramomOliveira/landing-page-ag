import NavBar from '../NavBar';

import { Container } from './style';

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      {children}
    </Container>
  );
}
