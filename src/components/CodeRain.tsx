import { useEffect, useRef } from 'react';

interface CodeRainProps {
  opacity?: number;
  speed?: number;
  fontSize?: number;
}

export default function CodeRain({ opacity = 0.15, speed = 1, fontSize = 14 }: CodeRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

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

    const draw = (currentTime: number) => {
      if (currentTime - lastTime > interval) {
        lastTime = currentTime;

        ctx.fillStyle = `rgba(8, 8, 12, 0.05)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px JetBrains Mono, monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          const gradient = ctx.createLinearGradient(x, y - fontSize * 3, x, y);
          gradient.addColorStop(0, `rgba(34, 211, 238, 0)`);
          gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity})`);
          gradient.addColorStop(1, `rgba(236, 72, 153, ${opacity * 1.5})`);
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
  }, [opacity, speed, fontSize]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity }}
    />
  );
}
