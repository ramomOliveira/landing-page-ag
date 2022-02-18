import makeCarousel from 'react-reveal/makeCarousel';
import Flip from 'react-reveal/Flip';
import Layout from '../components/Layout';
import Button from '../components/Button';

import {
  Container,
  Container2,
  ImgSlideDiv,
  WrapperRight,
  TitleHeader,
  TitleFooter,
  NameBurger,
  WrapperLeft,
  Title,
} from '../styles/index/style';

function CarouselUI({ children }) {
  return <Container2>{children}</Container2>;
}
const Carousel = makeCarousel(CarouselUI);

const images = ['/images/burgerS1.png', '/images/burgerS4.png'];

export default function Home() {
  return (
    <Layout>
      <Container>
        <WrapperLeft>
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
            <Button>get started</Button>
          </div>

          <Title>Food</Title>
        </WrapperLeft>

        <WrapperRight>
          <TitleHeader>Bur</TitleHeader>

          <Carousel defaultWait={3000}>
            {images.map((image) => (
              <Flip right key={image}>
                <ImgSlideDiv image={image} />
              </Flip>
            ))}
          </Carousel>

          <TitleFooter>ger</TitleFooter>
          <NameBurger>
            Spicy Beef <span>Burger</span>
          </NameBurger>
        </WrapperRight>
      </Container>
    </Layout>
  );
}
