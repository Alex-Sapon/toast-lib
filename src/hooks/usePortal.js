import { useEffect, useState } from 'react';

export const usePortal = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'toast-portal');
    document.body.appendChild(portal);

    setLoaded(true);
    return () => portal.remove();
  }, []);

  return { loaded };
};
