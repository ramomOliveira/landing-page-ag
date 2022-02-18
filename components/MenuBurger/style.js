import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '25px',
    height: '20px',
  },
  bmBurgerBars: {
    background: 'var(--yellow)',
  },
  bmBurgerBarsHover: {
    background: 'var(--yellow)',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: 'var(--white)',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
    left: '0',
  },
  bmMenu: {
    background: 'var(--black)',
    padding: '20px 20px 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: 'var(--white)',
    padding: '10px',
  },
  bmItem: {
    display: 'flex',
    marginBottom: '20px',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.2)',
    top: '0',
    left: '0',
  },
};
