import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 25px;
  gap: 10px;
  border-radius: 8px;
  padding: .5rem;
  width: 370px;
  height: 75px;
  align-items: center;
  color: ${({ styles }) => styles.color};
  background-color: ${({ styles }) => styles.backgroundColor};
  box-shadow: 0 3px 9px 2px rgba(34, 60, 80, .1);
  z-index: 900;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  animation: .6s ease 0s forwards normal ${({ animation }) => animation},
  .6s ease ${({ autoClose }) => autoClose}ms forwards alternate-reverse ${({ animation }) => animation};
}
`;

export const Icon = styled.div`
  justify-self: center;
  background: center / contain no-repeat url(${({ styles }) => styles.icon});
  height: 30px;
  width: 30px;
`;

export const TextWrapper = styled.div``;

export const Title = styled.div`
  font-size: 2rem;
  margin-bottom: 4px;
`;

export const Description = styled.div`
  font-size: 1.6rem
`;

export const CloseButton = styled.button`
  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  width: 100%;
  height: 20px;
  align-self: flex-start;
`;

export const CloseImg = styled.img`
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin-top: 5px;
`;

export const ProgressBar = styled.div`
  content: '';
  position: absolute;
  height: 5px;
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 2px;
  animation: fill ${({ autoClose }) => autoClose}ms linear forwards;

  @keyframes fill {
    100% {
      width: 0
    }
    0% {
      width: 100%
    }
`;
