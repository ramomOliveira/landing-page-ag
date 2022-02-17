import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )

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

          <Carousel defaultWait={3000} /* wait for 1000 milliseconds */>
            <Slide right>
              <ImgSlideDiv />
            </Slide>
            <Slide right>
              <ImgSlideDiv />
            </Slide>
            <Slide right>
              <ImgSlideDiv />
            </Slide>
            <Slide right>
              <ImgSlideDiv />
            </Slide>
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
