import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useMagnetic } from '@/hooks/useMagnetic';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const magnetic = useMagnetic<HTMLButtonElement>({ strength: 8, scale: 1.15 });

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="回到顶部"
    >
      <div className="absolute inset-0 rounded-full bg-white/70 dark:bg-white/10 backdrop-blur-md border border-dark-900/10 dark:border-white/10 transition-colors duration-500" />
      <div
        className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.25), inset 0 0 15px rgba(168, 85, 247, 0.1)',
        }}
      />
      <ArrowUp className="relative z-10 w-5 h-5 text-dark-900 dark:text-white transition-colors duration-500" strokeWidth={1.8} />
    </button>
  );
}
