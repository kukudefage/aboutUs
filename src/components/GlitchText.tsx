import { useState, useEffect, type ReactNode } from 'react';

interface GlitchTextProps {
  children: ReactNode;
  className?: string;
  interval?: number;
}

export default function GlitchText({ children, className = '', interval = 3000 }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, interval);

    return () => clearInterval(glitchInterval);
  }, [interval]);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>

      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 w-full h-full opacity-70"
            style={{
              color: '#22d3ee',
              transform: 'translate(-2px, 0)',
              clipPath: 'inset(0 0 50% 0)',
              animation: 'glitch 0.2s infinite',
            }}
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full opacity-70"
            style={{
              color: '#ec4899',
              transform: 'translate(2px, 0)',
              clipPath: 'inset(50% 0 0 0)',
              animation: 'glitch 0.2s infinite reverse',
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}
