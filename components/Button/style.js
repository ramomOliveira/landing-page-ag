import styled from 'styled-components';

export const Container = styled.button`
  border: 2px solid #0e0d2a;
  opacity: 0.4;
  border-radius: 25px;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 300px;
  padding: 4px 25px;

  :hover {
    color: var(--black);
    opacity: 1;
  }
`;
