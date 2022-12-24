import React from 'react';

import ToastContainer from 'components/toastContainer';
import { useToast } from 'hooks/useToast';

const styles = {
  border: 'none',
  outline: 'none',
  padding: '1rem',
  borderRadius: '5px',
  position: 'fixed',
  cursor: 'pointer',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'space-between',
};

export default {
  title: 'Toast',
  component: ToastContainer,
  argTypes: {
    title: 'Info',
    description: 'Example info description',
    type: {
      control: { type: 'radio' },
      options: ['success', 'info', 'warning', 'error'],
    },
    position: {
      control: { type: 'select' },
      options: [
        'bottom-right',
        'bottom-left',
        'bottom-middle',
        'top-right',
        'top-left',
        'top-middle',
      ],
    },
    animationName: {
      control: { type: 'select' },
      options: ['bounceUp', 'wobble', 'bounce', 'fade', 'flip'],
    },
    color: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    distance: {
      control: { type: 'select' },
      options: [5, 10, 15, 20, 25, 30],
    },

  },
};

const Template = args => {
  const {
    type,
    title,
    message,
    color,
    backgroundColor,
    autoClose,
    position,
    animationName,
    distance,
  } = args;

  const { toaster } = useToast(); // default - amountToasts = 3

  const handleClick = () => {
    toaster[type](message, {
      title,
      autoClose,
      position,
      color,
      backgroundColor,
    });
  };

  return (
    <React.Fragment>
      <ToastContainer distance={distance} animationName={animationName} />
      <button onClick={handleClick} type="button" style={styles}>
        Add toast
      </button>
    </React.Fragment>
  );
};

export const ToastExample = Template.bind({});

ToastExample.args = {
  type: 'success',
  title: 'Success',
  message: 'Example success description',
  color: '',
  backgroundColor: '',
  autoClose: 3000,
  position: 'bottom-left',
  animationName: 'bounce',
  distance: 15,
};
