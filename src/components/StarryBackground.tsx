import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface Meteor {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
}

interface StarryBackgroundProps {
  starCount?: number;
  meteorCount?: number;
}

export default function StarryBackground({ starCount = 100, meteorCount = 3 }: StarryBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const meteorsRef = useRef<Meteor[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 2 + 1,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }

      meteorsRef.current = [];
      for (let i = 0; i < meteorCount; i++) {
        meteorsRef.current.push(createMeteor(canvas.width, canvas.height, i));
      }
    };

    const createMeteor = (width: number, height: number, index: number): Meteor => ({
      x: Math.random() * width + width * 0.5,
      y: Math.random() * height * 0.5,
      length: Math.random() * 80 + 50,
      speed: Math.random() * 5 + 3,
      opacity: 0,
      angle: 215 + Math.random() * 10,
    });

    const resetMeteor = (meteor: Meteor, width: number, height: number) => {
      meteor.x = Math.random() * width + width * 0.3;
      meteor.y = Math.random() * height * 0.3;
      meteor.opacity = 0;
      meteor.speed = Math.random() * 5 + 3;
      meteor.length = Math.random() * 80 + 50;
    };

    let animationId: number;

    const animate = () => {
      timeRef.current += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        const twinkle =
          Math.sin(timeRef.current * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        const gradient = ctx.createRadialGradient(
          star.x,
          star.y,
          0,
          star.x,
          star.y,
          star.size * 2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
        gradient.addColorStop(0.5, `rgba(168, 139, 250, ${opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      meteorsRef.current.forEach((meteor, index) => {
        const radians = (meteor.angle * Math.PI) / 180;
        meteor.x += Math.cos(radians) * meteor.speed;
        meteor.y += Math.sin(radians) * meteor.speed;

        if (meteor.opacity < 1 && meteor.x > canvas.width * 0.5) {
          meteor.opacity += 0.02;
        }

        if (meteor.x < -meteor.length || meteor.y > canvas.height + meteor.length) {
          setTimeout(() => resetMeteor(meteor, canvas.width, canvas.height), Math.random() * 3000 + 2000);
        }

        if (meteor.opacity > 0) {
          const tailX = meteor.x - Math.cos(radians) * meteor.length;
          const tailY = meteor.y - Math.sin(radians) * meteor.length;

          const gradient = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
          gradient.addColorStop(0, 'rgba(34, 211, 238, 0)');
          gradient.addColorStop(0.5, `rgba(168, 85, 247, ${meteor.opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(236, 72, 153, ${meteor.opacity})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(meteor.x, meteor.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.stroke();

          const headGradient = ctx.createRadialGradient(
            meteor.x,
            meteor.y,
            0,
            meteor.x,
            meteor.y,
            4
          );
          headGradient.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
          headGradient.addColorStop(0.5, `rgba(236, 72, 153, ${meteor.opacity * 0.5})`);
          headGradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

          ctx.beginPath();
          ctx.arc(meteor.x, meteor.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = headGradient;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [starCount, meteorCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
}
