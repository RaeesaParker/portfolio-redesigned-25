import { useRef } from 'react';

import { Footer } from './common/footer';
import { Header } from './common/header';
import { About } from './pages/homepage/components/about';
import { Contact } from './pages/homepage/components/contact';
import { Hero } from './pages/homepage/components/hero';
import { Work } from './pages/homepage/components/work';

import './App.css';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="flex flex-col px-24">
        <Header />
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
