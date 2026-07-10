import { useRef, useState, type ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = '' }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotPosition, setSpotPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setSpotPosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 rounded-2xl p-px pointer-events-none opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background:
            'linear-gradient(90deg, rgba(34, 211, 238, 0.5), rgba(168, 85, 247, 0.5), rgba(236, 72, 153, 0.5), rgba(34, 211, 238, 0.5))',
          backgroundSize: '200% 200%',
          animation: 'borderFlow 3s linear infinite',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none opacity-0 transition-opacity duration-500 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: spotPosition.x,
          top: spotPosition.y,
          opacity: isHovered ? 1 : 0,
          background:
            'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(34, 211, 238, 0.05) 40%, transparent 70%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
        }}
      />

      {children}
    </div>
  );
}
