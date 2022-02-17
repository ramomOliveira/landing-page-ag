import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 20px 0 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin: 80px 151px 0 157px;
  }
`;

export const Container2 = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 200px;

  @media (min-width: 768px) {
    width: 600px;
    height: 400px;
  }
`;
export const ImgSlideDiv = styled.div`
  background-image: url('/images/burgerS1.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 300px;
  height: 200px;

  @media (min-width: 768px) {
    width: 600px;
    height: 400px;
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleHeader = styled.h1`
  margin-bottom: -80px;
  font-size: 100px;
  color: #fbfafa;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 10px;

  @media (min-width: 768px) {
    font-size: 130px;
  }
`;

export const TitleFooter = styled.h1`
  text-transform: uppercase;
  margin-top: -40px;
  font-size: 100px;
  color: #fbfafa;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
  letter-spacing: 10px;

  @media (min-width: 768px) {
    font-size: 130px;
  }
`;

export const NameBurger = styled.h1`
  font-family: 'Modak', sans-serif;
  font-size: 30px;
  font-weight: 400;

  > span {
    color: var(--yellow);
  }

  @media (min-width: 768px) {
    margin-top: -70px;
  }
`;

export const WrapperLeft = styled.div`
  > div {
    margin-bottom: 20px;
    > h2 {
      font-family: 'Open Sans', sans-serif;
      font-size: 27px;
      text-transform: uppercase;
      color: var(--gray);
      margin-bottom: 10px;
    }

    > h1 {
      font-family: 'Modak', sans-serif;
      font-size: 57px;
      color: var(--black);
      font-weight: 400;
      > span {
        color: var(--yellow);
      }
    }

    > p {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 14px;
      color: var(--gray);
      line-height: 24px;
    }

    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  text-transform: uppercase;
  font-size: 80px;
  color: #fbfafa;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
  letter-spacing: 10px;

  @media (min-width: 768px) {
    margin-bottom: -70px;
    margin-right: -110px;
    font-size: 130px;
  }
`;
