import { Hero } from './pages/homepage/components/hero';
import { useRef } from 'react';

import './App.css';
import { ColourSwitcher } from './common/colourSwitcher';
import { About } from './pages/homepage/components/about';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  // 242424 black colour
  return (
    <>
      <div className="flex flex-col">
        <ColourSwitcher />
        <Hero onEnterUniverse={scrollToAbout} />
        <About aboutRef={aboutRef} />
      </div>
    </>
  );
}

export default App;
