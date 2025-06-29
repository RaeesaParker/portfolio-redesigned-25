import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ColourSwitcher({ menuOpen }: { menuOpen: boolean }) {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const [moonColor, setMoonColor] = useState('var(--color-blue-50)');
  const [sunColor, setSunColor] = useState('var(--color-gold-800)');

  useEffect(() => {
    if (isDark) {
      if (menuOpen) {
        setMoonColor('var(--color-blue-900)');
        setSunColor('var(--color-gold-300)');
      } else {
        setMoonColor('var(--color-blue-500)');
        setSunColor('var(--color-gold-400)');
      }
    } else {
      if (menuOpen) {
        setMoonColor('var(--color-blue-700)');
        setSunColor('var(--color-gold-800)');
      } else {
        setMoonColor('var(--color-blue-500)');
        setSunColor('var(--color-gold-600)');
      }
    }
  }, [menuOpen, isDark]);

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
        rounded-full px-3 py-2 backdrop-blur-sm
      `}
    >
      <span
        className={`
          p-2 rounded-full transition-colors
          ${isDark ? `border-2 border-[${moonColor}]` : ''}
        `}
        style={{ color: moonColor }}
      >
        <FaMoon />
      </span>
      <span
        className={`
          p-2 rounded-full transition-colors
          ${!isDark ? `border-2 border-[${sunColor}]` : ''}
        `}
        style={{ color: sunColor }}
      >
        <FaSun />
      </span>
    </button>
  );
}
