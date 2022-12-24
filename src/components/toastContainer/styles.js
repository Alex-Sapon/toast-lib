import styled from 'styled-components';

export const Container = styled.div`
  width: 370px;
  position: fixed;
  top: ${props => props.theme.top}%;
  left: ${props => props.theme.left}%;
  right: ${props => props.theme.right}%;
  bottom: ${props => props.theme.bottom}%;
  transform: translate(${props => props.theme.translate}%);
  padding: 1rem;
  display: grid;
  row-gap: ${props => props.distance}px;
  grid-template-rows: max-content;
`;
