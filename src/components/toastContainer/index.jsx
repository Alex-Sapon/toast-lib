import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { ToastSlot } from 'components/toastSlot';
import { POSITIONS } from 'constants/positions';
import { usePortal } from 'hooks';
import { GlobalStyles } from 'styles/global';
import { ToastFactory } from 'utils/toastFactory';

const ToastContainer = ({ distance, animationName }) => {
  const [instance] = useState(() => ToastFactory.getInstance());
  const [toasts, setToasts] = useState(() => instance.toasts);
  const { loaded } = usePortal();

  const slots = POSITIONS.map(position =>
    toasts.filter(toast => toast.position === position),
  );

  useEffect(() => {
    instance.listener(newToasts => setToasts(newToasts));
  }, [instance]);

  return loaded
    ? ReactDOM.createPortal(
      <React.Fragment>
        {slots.map((slot, i) =>
          <ToastSlot
            key={POSITIONS[i]}
            toasts={slot}
            distance={distance}
            animationName={animationName}
          />,
          )}
        <GlobalStyles />
      </React.Fragment>,
      document.getElementById('toast-portal'))
    : null;
};

ToastContainer.defaultProps = {
  distance: 15,
};

ToastContainer.propsType = {
  animationName: PropTypes.string,
  distance: PropTypes.number,
};

export default ToastContainer;
