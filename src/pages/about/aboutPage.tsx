import { useEffect, useRef } from 'react';

import { Header } from '../../common/header';
import { AboutHero } from './components/AboutHero';
import { AstronomyJourney } from './components/AstronomyJourney';
import { TechTransition } from './components/TechTransition';
import { Footer } from '../../common/footer';
import { Contact } from '../../common/components/contact';

export const AboutPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="flex flex-col min-h-screen px-24 gap-0 aurora-bg">
      <Header />
      <AboutHero onScrollToSection={scrollToSection} />
      <AstronomyJourney sectionRef={sectionRef} />
      <TechTransition />
      <Contact />
      <Footer />
    </div>
  );
};
