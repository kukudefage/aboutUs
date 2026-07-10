import { useEffect, useRef } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const coreRef2 = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.12;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.12;

      coreRef2.current.x += (mouseRef.current.x - coreRef2.current.x) * 0.2;
      coreRef2.current.y += (mouseRef.current.y - coreRef2.current.y) * 0.2;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentRef.current.x - 350}px, ${currentRef.current.y - 350}px)`;
      }
      if (coreRef.current) {
        coreRef.current.style.transform = `translate(${coreRef2.current.x - 100}px, ${coreRef2.current.y - 100}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const isDark = theme === 'dark';

  const glowBackground = isDark
    ? 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(34, 211, 238, 0.1) 35%, transparent 70%)'
    : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 35%, transparent 70%)';

  const coreBackground = isDark
    ? 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(168, 85, 247, 0.1) 40%, transparent 70%)'
    : 'radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.08) 40%, transparent 70%)';

  const glowOpacity = isDark ? 0.6 : 0.4;
  const coreOpacity = isDark ? 0.8 : 0.5;

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full pointer-events-none z-[1]"
        style={{
          background: glowBackground,
          filter: 'blur(30px)',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          opacity: glowOpacity,
        }}
      />
      <div
        ref={coreRef}
        className="fixed top-0 left-0 w-[200px] h-[200px] rounded-full pointer-events-none z-[1]"
        style={{
          background: coreBackground,
          filter: 'blur(15px)',
          mixBlendMode: isDark ? 'screen' : 'multiply',
          opacity: coreOpacity,
        }}
      />
    </>
  );
}
