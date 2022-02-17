import { IconLogo } from '../Icons';
import { Container, WrapperUl, TitleH1 } from './style';

export default function NavBar() {
  return (
    <Container>
      <div>
        {IconLogo}
        <TitleH1>
          Burger<span>iaz</span>
        </TitleH1>
      </div>

      <WrapperUl>
        <li>Home</li>
        <li>New Menu</li>
        <li>About Us</li>
        <li>Main Course</li>
        <div>
          <input placeholder="Search" type="search" />
          <img src="/images/Search-Icon.png" alt="" />
        </div>
      </WrapperUl>
    </Container>
  );
}
