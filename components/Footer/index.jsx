import { Container, Trace, Info, WrapperLeft, WrapperRight } from './style';

export default function Footer() {
  return (
    <Container>
      <WrapperLeft>
        <Trace />
        <Info>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            commodi provident, maiores velit eveniet quo minus a
          </p>
        </Info>
      </WrapperLeft>

      <WrapperRight>
        <h2>Don&apos;t Miss Our Promo On</h2>
        <div>
          <img src="/images/Icon-2.png" alt="" />
          <img src="/images/Icon-1.png" alt="" />
          <img src="/images/Icon.png" alt="" />
        </div>
      </WrapperRight>
    </Container>
  );
}
