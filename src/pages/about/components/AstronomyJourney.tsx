import AboutImage from '../../homepage/assets/about.png';

export const AstronomyJourney = ({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) => (
  <section
    ref={sectionRef}
    className="flex flex-col md:flex-row items-center justify-center gap-16 w-full h-dvh"
  >
    <div className="flex-1 flex items-center justify-center">
      <img
        src={AboutImage}
        alt="Raeesa as a student"
        className="w-48 h-48 object-cover rounded-lg shadow-lg"
      />
    </div>
    <div className="flex-[2] flex flex-col items-start justify-center gap-5 max-w-xl">
      <h2 className="mb-2">How I started in Astronomy</h2>
      <p className="leading-relaxed">
        My fascination with the cosmos began at a young age, gazing up at the
        night sky and wondering about the mysteries beyond. This curiosity led
        me to pursue a degree in astrophysics, where I learned to analyze data
        from distant stars and galaxies, solve complex problems, and think
        critically about the universe. My academic journey taught me the value
        of perseverance, analytical thinking, and a deep appreciation for
        discovery.
      </p>
    </div>
  </section>
);
