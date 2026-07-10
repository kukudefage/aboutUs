import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useMagnetic } from '@/hooks/useMagnetic';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const magnetic = useMagnetic<HTMLButtonElement>({ strength: 10, scale: 1.1 });

  return (
    <button
      ref={magnetic.ref}
      onMouseMove={magnetic.onMouseMove}
      onMouseLeave={magnetic.onMouseLeave}
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 hover:scale-110 group"
      aria-label="切换主题"
    >
      <div className="absolute inset-0 rounded-full bg-white/5 dark:bg-white/5 backdrop-blur-md border border-white/10 dark:border-white/10 group-hover:border-neon-cyan/50 dark:group-hover:border-neon-cyan/50 transition-all duration-300" />
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.1)',
        }}
      />

      <div className="relative z-10 w-5 h-5">
        <Sun
          className={`absolute inset-0 w-5 h-5 text-amber-400 transition-all duration-500 ${
            theme === 'dark'
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100'
          }`}
          strokeWidth={1.8}
        />
        <Moon
          className={`absolute inset-0 w-5 h-5 text-neon-cyan transition-all duration-500 ${
            theme === 'dark'
              ? 'opacity-100 rotate-0 scale-100'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
          strokeWidth={1.8}
        />
      </div>

      <div
        className={`absolute inset-0 rounded-full transition-all duration-700 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-neon-purple/10 to-neon-cyan/10'
            : 'bg-gradient-to-br from-amber-200/20 to-orange-200/20'
        }`}
      />
    </button>
  );
}
