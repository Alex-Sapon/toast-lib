import { nanoid } from 'nanoid';

import { info, success, error, warning } from '@/assets/icons';

export const createToast = (message, options, type) => {
  const { title, color, backgroundColor, autoClose, position } = options;

  switch (type) {
    case 'info':
      return {
        id: nanoid(48),
        title: title || 'Info',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#9A40D3',
        icon: info,
        autoClose,
        position,
      };
    case 'warning':
      return {
        id: nanoid(48),
        title: title || 'Warning',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#E25837',
        icon: warning,
        autoClose,
        position,
      };
    case 'error':
      return {
        id: nanoid(48),
        title: title || 'Error',
        message,
        color: color || '#2E2834',
        backgroundColor: backgroundColor || '#F4E048',
        icon: error,
        autoClose,
        position,
      };
    case 'success':
      return {
        id: nanoid(48),
        title: title || 'Success',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#37E29A',
        icon: success,
        autoClose,
        position,
      };
    default:
  }
};
