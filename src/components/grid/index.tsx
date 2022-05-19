import styled from 'styled-components';
interface GridProps {
  direction?: 'column' | 'row';
}
export const Grid = styled.div<GridProps> `
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  direction: ${p => p.direction === 'column' ? 'column' : 'row'};
`;

export const GridItem = styled.div `
  display: flex;
  flex-grow: 0;
  max-width: 25%;
  flex-basis: 25%;
  justify-content: center;
  @media (max-width: 1140px)  {
    max-width: 100%;
    flex-basis: 100%;
  }
`;