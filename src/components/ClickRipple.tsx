import { useState, useCallback, useEffect } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const createRipple = useCallback((e: MouseEvent) => {
    const newRipple: Ripple = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  }, []);

  useEffect(() => {
    window.addEventListener('click', createRipple);
    return () => window.removeEventListener('click', createRipple);
  }, [createRipple]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute w-20 h-20 rounded-full border border-neon-purple/40 animate-ripple"
          style={{
            left: ripple.x - 40,
            top: ripple.y - 40,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 70%)',
          }}
        />
      ))}
    </div>
  );
}
