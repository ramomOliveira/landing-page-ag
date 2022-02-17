import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 51px 151px 0 157px;

  > div {
    display: flex;
    align-items: flex-end;
    gap: 2px;
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
  margin-left: 230px;

  > li {
    :hover {
      color: var(--medium-white);
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
