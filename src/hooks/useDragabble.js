import { useState, useEffect, useRef } from 'react';

export const useDraggable = (element, remove) => {
  const startPageX = useRef();
  const [{ pageX, opacity }, setStyles] = useState({ pageX: 0, opacity: 1 });
  const [mouseUp, setMouseUp] = useState(false);

  useEffect(() => {
    const elem = element.current;

    elem.addEventListener('mousedown', handleMouseDown);

    function handleMouseDown(event) {
      startPageX.current = event.pageX;
      setMouseUp(false);

      function handleMouseMove(e) {
        const currentPageX = e.pageX - startPageX.current;
        setStyles({
          pageX: currentPageX,
          opacity: Number((1 - Math.abs(currentPageX / 200)).toFixed(2)),
        });
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', () => {
          setMouseUp(true);
          document.removeEventListener('mousemove', handleMouseMove);
        },
        { once: true },
      );
    };

    return () => elem.removeEventListener('mousedown', handleMouseDown);
  }, [element]);

  useEffect(() => {
    if (!mouseUp) return;
    if (opacity >= 0 && opacity <= 1) setStyles({ pageX: 0, opacity: 1 });
    else remove();
  }, [opacity, mouseUp, remove]);

  useEffect(() => {
    const elem = element.current;
    elem.style.cssText = `
      transform: translateX(${pageX}px)${pageX !== 0 && '!important'};
      opacity: ${opacity}${opacity !== 1 && '!important'};
    `;
  }, [pageX, opacity, element]);
};
