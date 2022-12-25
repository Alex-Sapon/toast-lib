import { v1 } from 'uuid';

import error from '@/assets/icons/error.svg';
import info from '@/assets/icons/info.svg';
import success from '@/assets/icons/success.svg';
import warning from '@/assets/icons/warning.svg';

export const createToast = (message, options, type) => {
  const { color, backgroundColor, autoClose, position } = options;

  switch (type) {
    case 'info':
      return {
        id: v1(),
        title: 'Info',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#9A40D3',
        icon: info,
        autoClose,
        position,
      };
    case 'warning':
      return {
        id: v1(),
        title: 'Warning',
        message,
        color: color || '#fff',
        backgroundColor: backgroundColor || '#E25837',
        icon: warning,
        autoClose,
        position,
      };
    case 'error':
      return {
        id: v1(),
        title: 'Error',
        message,
        color: color || '#2E2834',
        backgroundColor: backgroundColor || '#F4E048',
        icon: error,
        autoClose,
        position,
      };
    case 'success':
      return {
        id: v1(),
        title: 'Success',
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
