import { useState } from 'react';

import { ColourSwitcher } from './colourSwitcher';
import { OpenMenu } from './components/openMenu';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 ">
        <div className="flex items-center justify-between pt-8 mx-auto max-w-screen-2xl px-24">
          <button
            className="text-xl font-bold backdrop-blur-sm rounded-full  text-[var(--color-blue-900)] dark:text-[var(--color-blue-50)] "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
          <ColourSwitcher />
        </div>
      </header>

      {menuOpen && <OpenMenu setMenuOpen={setMenuOpen} />}
    </>
  );
};
