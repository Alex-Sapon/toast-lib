import { useCallback, useState } from 'react';

import { createToast } from '@/helpers/createToast';
import { ToastFactory } from '@/utils/toastFactory';

export const useToast = (amountToasts = 3) => {
  const [instance] = useState(() => ToastFactory.getInstance());

  const removeToast = useCallback(id => instance.remove(id), [instance]);

  const addToast = (message, options, type) => {
    if (instance.toasts.length === amountToasts) return;
    const toast = createToast(message, options, type);
    instance.add({ ...toast, remove: removeToast });
    removeToast(toast);
  };

  const toaster = {
    success: (message, options) => addToast(message, options, 'success'),
    info: (message, options) => addToast(message, options, 'info'),
    warning: (message, options) => addToast(message, options, 'warning'),
    error: (message, options) => addToast(message, options, 'error'),
  };

  return { toaster };
};
