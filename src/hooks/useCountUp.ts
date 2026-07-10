import { useState, useEffect, useRef } from 'react';

interface CountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  delay?: number;
}

export function useCountUp({ end, duration = 2000, start = 0, delay = 0 }: CountUpOptions) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const startTimeRef = useRef<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startAnim = () => {
      startTimeRef.current = null;

      const animate = (timestamp: number) => {
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }

        const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = start + (end - start) * easeOutQuart;

        countRef.current = currentValue;
        setCount(Math.floor(currentValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    };

    const timer = setTimeout(startAnim, delay);
    return () => clearTimeout(timer);
  }, [isVisible, end, duration, start, delay]);

  return { count, ref: elementRef };
}
