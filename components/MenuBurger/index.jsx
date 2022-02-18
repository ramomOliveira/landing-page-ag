import { fallDown as Menu } from 'react-burger-menu';

import { styles, Container } from './style';

export default function MenuBurger() {
  return (
    <Container>
      <Menu styles={styles}>
        <a href="/">Home</a>

        <a href="/">New Menu</a>
        <a href="/">About Us</a>
        <a href="/">Main Course</a>
      </Menu>
    </Container>
  );
}
