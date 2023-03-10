import styled from 'styled-components';

export const SlotContainer = styled.div`
  position: fixed;
  ${({ coordinates }) => coordinates};
  margin: 4rem;
  display: grid;
  row-gap: ${props => props.distance}px;
`;
