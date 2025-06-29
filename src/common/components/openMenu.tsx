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
        bg-[var(--color-gold-400)] dark:bg-[var(--color-blue-400)]
        flex flex-col
        transition-transform duration-500 ease-in-out
        translate-y-0
        animate-slideDown
      "
      style={{ willChange: 'transform' }}
    >
      <nav className="flex flex-1 flex-col justify-center  font-semibold ">
        <div className=" flex flex-col px-32 gap-16 items-start">
          <div className="flex w-1/2 items-center  justify-between">
            <a
              href="/"
              className="menu-item "
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <p className=" align-middle"> Back to the homepage</p>
          </div>

          <div className="flex w-1/2 items-center  justify-between">
            <a
              href="/about"
              className="   menu-item"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <p className=" align-middle"> Back to the homepage</p>
          </div>

          <div className="flex w-1/2 items-center  justify-between ">
            <a
              href="/work"
              className=" menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </a>
            <p className=" align-middle"> Back to the homepage</p>
          </div>

          <div className="flex w-1/2 items-center  justify-between ">
            <a
              href="/contact"
              className=" menu-item"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
            <p className=" align-middle"> Back to the homepage</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
