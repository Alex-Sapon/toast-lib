import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { ToastSlot } from '@/components/toastSlot';
import { ErrorBoundary } from '@/components/errorBoundary';
import { POSITIONS } from '@/constants/positions';
import { usePortal } from '@/hooks/usePortal';
import { GlobalStyles } from '@/styles/global';
import { ToastFactory } from '@/utils/toastFactory';

export const ToastContainer = ({ distance, animationName }) => {
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
      <ErrorBoundary>
        {slots.map((slot, i) =>
          <ToastSlot
            key={POSITIONS[i]}
            toasts={slot}
            distance={distance}
            animationName={animationName}
          />,
        )}
        <GlobalStyles />
      </ErrorBoundary>,
      document.getElementById('toast-portal'))
    : null;
};

ToastContainer.defaultProps = {
  distance: 15,
};

ToastContainer.propsType = {
  distance: PropTypes.number,
  animationName: PropTypes.string,
};
