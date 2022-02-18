import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fbfafa;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  background-image: url('/images/Shape.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const SpanRight = styled.div`
  display: flex;
  justify-content: flex-end;
  z-index: -10;

  > span {
    background-color: red;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    justify-content: flex-end;
  }
`;
