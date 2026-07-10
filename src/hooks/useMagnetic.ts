import { useRef, useCallback } from 'react';

interface UseMagneticOptions {
  strength?: number;
  scale?: number;
}

export function useMagnetic<T extends HTMLElement = HTMLDivElement>({
  strength = 30,
  scale = 1.05,
}: UseMagneticOptions = {}) {
  const ref = useRef<T>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);

      ref.current.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px) scale(${scale})`;
      ref.current.style.transition = 'transform 0.15s ease-out';
    },
    [strength, scale]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0) scale(1)';
    ref.current.style.transition = 'transform 0.3s ease-out';
  }, []);

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
