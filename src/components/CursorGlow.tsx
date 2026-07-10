import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.1;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentRef.current.x - 300}px, ${currentRef.current.y - 300}px)`;
      }
      if (trailRef.current) {
        const trailX = currentRef.current.x + (mouseRef.current.x - currentRef.current.x) * 0.5;
        const trailY = currentRef.current.y + (mouseRef.current.y - currentRef.current.y) * 0.5;
        trailRef.current.style.transform = `translate(${trailX - 200}px, ${trailY - 200}px)`;
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

  return (
    <>
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(34, 211, 238, 0.05) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </>
  );
}
