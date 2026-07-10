import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

interface CodeRainProps {
  opacity?: number;
  speed?: number;
  fontSize?: number;
}

export default function CodeRain({ opacity = 0.15, speed = 1, fontSize = 14 }: CodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isDark = theme === 'dark';

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン<>{}[]()=+-*/&|!@#$%^';
    const charArray = chars.split('');
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let animationId: number;
    let lastTime = 0;
    const interval = 50 / speed;

    const trailColor = isDark ? 'rgba(8, 8, 12, 0.05)' : 'rgba(248, 250, 252, 0.08)';
    const gradientStart = isDark ? 'rgba(34, 211, 238, 0)' : 'rgba(59, 130, 246, 0)';
    const gradientMid = isDark ? `rgba(168, 85, 247, ${opacity})` : `rgba(139, 92, 246, ${opacity * 0.8})`;
    const gradientEnd = isDark ? `rgba(236, 72, 153, ${opacity * 1.5})` : `rgba(236, 72, 153, ${opacity * 1.2})`;

    const draw = (currentTime: number) => {
      if (currentTime - lastTime > interval) {
        lastTime = currentTime;

        ctx.fillStyle = trailColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px JetBrains Mono, monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          const gradient = ctx.createLinearGradient(x, y - fontSize * 3, x, y);
          gradient.addColorStop(0, gradientStart);
          gradient.addColorStop(0.5, gradientMid);
          gradient.addColorStop(1, gradientEnd);
          ctx.fillStyle = gradient;

          ctx.fillText(text, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [opacity, speed, fontSize, theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    />
  );
}
