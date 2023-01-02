import React, { memo } from 'react';

import { SlotContainer } from '@/components/toastSlot/styles';

import { Toast } from '@/components';
import { coordinates } from '@/styles/coordinates';

export const ToastSlot = memo(({ toasts, distance, animationName }) => {
  if (!toasts.length) return null;

  return (
    <SlotContainer
      coordinates={coordinates[toasts[0].position]}
      distance={distance}
    >
      {toasts.map(toast =>
        <Toast
          {...toast}
          key={toast.id}
          animationName={animationName}
        />
      )}
    </SlotContainer>
  );
});
