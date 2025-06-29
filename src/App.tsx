import { Hero } from './pages/homepage/components/hero';
import { useRef } from 'react';

import './App.css';
import { ColourSwitcher } from './common/colourSwitcher';
import { About } from './pages/homepage/components/about';
import { Work } from './pages/homepage/components/work';
import { Contact } from './pages/homepage/components/contact';
import { Footer } from './common/footer';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col pr-16 pl-16">
        <ColourSwitcher />
        <Hero onEnterUniverse={scrollToAbout} />
        <About aboutRef={aboutRef} />
        <Work />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
