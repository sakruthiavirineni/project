import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  //grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  width: auto;
  height: auto;
  //background: #FDEBD2;
  padding: 20px 60px;
  z-index: 7;
  //box-shadow: 3px 0px 4px 2px #888888
  //box-sizing: border-box;
  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;