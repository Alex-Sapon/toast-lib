import React, { memo, useCallback, useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import {
  Container,
  Description,
  Icon,
  TextWrapper,
  Title,
  ProgressBar,
  Close
} from './styles';
import { getAnimation } from '@/helpers/getAnimation';
import { useDraggable } from '@/hooks/useDraggable';

export const Toast = memo(props => {
  const {
    id, title, message, autoClose, remove, position, animationName, ...restStyles
  } = props;

  const { color } = restStyles;

  const [finallyAnimation, setFinallyAnimation] = useState(false);
  const element = useRef();

  const handleAnimationEnd = () => setFinallyAnimation(true);

  const handleClose = useCallback(() => remove(id), [remove, id]);

  useDraggable(element, handleClose);

  useEffect(() => {
    if (autoClose) {
      const timerId = setTimeout(() => {
        handleAnimationEnd();
        remove(id);
      }, autoClose);
      return () => clearTimeout(timerId);
    }
  }, [remove, id, autoClose, finallyAnimation]);

  return (
    <Container
      ref={element}
      styles={restStyles}
      autoClose={autoClose}
      animation={getAnimation(position, animationName)}
      onAnimationEnd={handleAnimationEnd}
    >
      <Icon styles={restStyles} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{message}</Description>
      </TextWrapper>
      <Close onClick={handleClose} color={color} />
      <ProgressBar autoClose={autoClose} />
    </Container>
  );
});

Toast.propsType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  autoClose: PropTypes.number,
  remove: PropTypes.func.isRequired,
  position: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
