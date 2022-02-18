import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 0 20px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 0;
    padding: 0 157px 50px 0;
  }
`;

export const WrapperLeft = styled.div`
  display: flex;
`;

export const Trace = styled.div`
  background-color: var(--black);
  height: 6px;
  width: 60px;

  @media (min-width: 768px) {
    width: 130px;
  }
`;

export const Info = styled.div`
  width: 350px;
  margin-left: 21px;

  > h1 {
    font-size: 24px;
    color: var(--yellow);
    font-weight: bold;
    margin-bottom: 10px;
  }

  > p {
    font-size: 14px;
    color: var(--gray);
  }
`;

export const WrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
  padding-bottom: 30px;

  > h2 {
    font-size: 24px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    gap: 30px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
    padding-bottom: 0;

    > h2 {
      margin-right: 30px;
      margin-bottom: 0;
    }
  }
`;
