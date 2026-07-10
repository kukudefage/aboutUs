import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = theme === 'dark';

  const boxShadow = isDark
    ? '0 0 10px rgba(168, 85, 247, 0.5), 0 0 20px rgba(34, 211, 238, 0.3)'
    : '0 0 8px rgba(139, 92, 246, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)';

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow,
        }}
      />
    </div>
  );
}
