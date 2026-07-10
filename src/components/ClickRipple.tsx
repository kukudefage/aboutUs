import { useState, useCallback, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function ClickRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const { theme } = useTheme();

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

  const isDark = theme === 'dark';

  const borderColor = isDark ? 'border-neon-purple/40' : 'border-purple-400/30';
  const background = isDark
    ? 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 70%)'
    : 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className={`absolute w-20 h-20 rounded-full border ${borderColor} animate-ripple`}
          style={{
            left: ripple.x - 40,
            top: ripple.y - 40,
            background,
          }}
        />
      ))}
    </div>
  );
}
