import { nanoid } from 'nanoid';

import info from '@/assets/icons/info.svg';
import success from '@/assets/icons/success.svg';
import error from '@/assets/icons/error.svg';
import warning from '@/assets/icons/warning.svg';

export const createToast = (message, options, type) => {
  const { title, color, backgroundColor, autoClose, position } = options;

  switch (type) {
    case 'info':
      return {
        id: nanoid(),
        title: title || 'Info',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#9A40D3',
        icon: info,
        autoClose,
        position
      };
    case 'warning':
      return {
        id: nanoid(),
        title: title || 'Warning',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#E25837',
        icon: warning,
        autoClose,
        position
      };
    case 'error':
      return {
        id: nanoid(),
        title: title || 'Error',
        message,
        color: color || '#2E2834',
        backgroundColor: backgroundColor || '#F4E048',
        icon: error,
        autoClose,
        position
      };
    case 'success':
      return {
        id: nanoid(),
        title: title || 'Success',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#37E29A',
        icon: success,
        autoClose,
        position
      };
    default:
  }
};
