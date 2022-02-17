import Layout from '../components/Layout';

import {
  Container,
  WrapperRight,
  TitleHeader,
  TitleFooter,
  NameBurger,
} from '../styles/index/style';

export default function Home() {
  return (
    <Layout>
      <Container>
        <div>
          <h2>Open today for great food</h2>
          <h1>You Can Make</h1>
          <h1>
            Your Own <span>Burger</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            tenetur error obcaecati ullam veritatis quibusdam voluptas
          </p>
          <button type="button">get Started</button>
        </div>
        <WrapperRight>
          <TitleHeader>Bur</TitleHeader>
          <img src="/images/burger.png" alt="" />
          <TitleFooter>ger</TitleFooter>
          <NameBurger>
            Spicy Beef <span>Burger</span>
          </NameBurger>
        </WrapperRight>
      </Container>
    </Layout>
  );
}
