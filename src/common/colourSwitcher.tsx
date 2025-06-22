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
      className="
        fixed top-4 right-4 z-50
        inline-flex items-center gap-1
        bg-[var(--bg-secondary)] border border-[var(--border-color)]
        rounded-full p-1 backdrop-blur-sm
        transition-transform duration-200 hover:scale-105
      "
    >
      {/* Moon icon – always blue; gets red ring when active */}
      <span
        className={`
          p-2 rounded-full transition-colors
          text-blue-500
          ${isDark ? 'bg-red-500/25 border-2 border-red-500' : ''}
        `}
      >
        <FaMoon />
      </span>

      {/* Sun icon – always yellow; gets red ring when active */}
      <span
        className={`
          p-2 rounded-full transition-colors
          text-yellow-400
          ${!isDark ? 'bg-red-500/25 border-2 border-red-500' : ''}
        `}
      >
        <FaSun />
      </span>
    </button>
  );
}
