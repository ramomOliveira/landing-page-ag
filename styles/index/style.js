import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 80px 151px 0 157px;
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > img {
    width: 600px;
  }
`;

export const TitleHeader = styled.h1`
  margin-bottom: -80px;
  font-size: 130px;
  color: #fbfafa;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  letter-spacing: 10px;
`;

export const TitleFooter = styled.h1`
  text-transform: uppercase;
  margin-top: -40px;
  font-size: 130px;
  color: #fbfafa;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.3);
  letter-spacing: 10px;
`;

export const NameBurger = styled.h1`
  margin-top: -70px;
  font-family: 'Modak', sans-serif;
  font-size: 30px;
  font-weight: 400;

  > span {
    color: var(--yellow);
  }
`;
