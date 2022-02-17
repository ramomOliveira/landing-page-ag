import Footer from '../Footer';
import NavBar from '../NavBar';

import { Container } from './style';

export default function Layout({ children }) {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
}
