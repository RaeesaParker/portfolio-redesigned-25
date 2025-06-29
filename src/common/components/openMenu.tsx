import { useEffect } from 'react';

export const OpenMenu = ({
  setMenuOpen,
}: {
  setMenuOpen: (open: boolean) => void;
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="
        fixed inset-0 
        bg-[var(--color-gold-600)] dark:bg-[var(--color-blue-400)]
        flex flex-col
        transition-transform duration-500 ease-in-out
        translate-y-0
        animate-slideDown
      "
      style={{ willChange: 'transform' }}
    >
      <nav className="flex flex-1 flex-col items-center justify-center gap-10 text-4xl font-semibold">
        <a
          href="/"
          className="hover:text-[var(--color-gold-500)] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="/about"
          className="hover:text-[var(--color-gold-500)] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="/work"
          className="hover:text-[var(--color-gold-500)] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Work
        </a>
        <a
          href="/contact"
          className="hover:text-[var(--color-gold-500)] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
