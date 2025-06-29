import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ColourSwitcher() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  // toggle the .dark class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark/light mode"
      className={`
        inline-flex items-center gap-1
        button-border
        rounded-full p-1 backdrop-blur-sm
      `}
    >
      <span
        className={`
          p-2 rounded-full transition-colors
          text-[var(--color-blue-500)]
          ${isDark ? 'border-2 border-[var(--color-blue-500)]' : ''}
        `}
      >
        <FaMoon />
      </span>

      <span
        className={`
          p-2 rounded-full transition-colors
          text-[var(--color-gold-400)]
          ${!isDark ? ' border-2 border-[var(--color-gold-400)]' : ''}
        `}
      >
        <FaSun />
      </span>
    </button>
  );
}
