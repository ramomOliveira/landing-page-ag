import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    padding: 20px;
  }

  @media (min-width: 768px) {
    padding: 51px 151px 0 157px;

    > div {
      padding: 0px;
    }
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  @media (min-width: 768px) {
    margin-left: 0px;
  }
`;

export const TitleH1 = styled.h1`
  font-size: 25px;
  text-transform: uppercase;
  font-weight: 900;

  > span {
    color: var(--yellow);
  }
`;

export const WrapperUl = styled.ul`
  font-size: 20px;
  display: none;
  align-items: center;
  gap: 30px;

  > li {
    :hover {
      color: var(--black);
      cursor: pointer;
    }
    color: rgba(0, 0, 0, 0.3);
  }

  > div {
    background-color: var(--medium-white);
    border-radius: 28px;
    display: flex;
    align-items: center;
    padding: 5px 15px;

    > input {
      width: 178px;
      padding: 10px;
      font-size: 15px;
      color: var(--black);
      :focus {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0 none;
      }
    }

    > img {
      width: 30px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;
