interface AboutHeroProps {
  onScrollToSection: () => void;
}

export const AboutHero = ({ onScrollToSection }: AboutHeroProps) => (
  <div className="flex justify-center align-middle text-center h-dvh">
    <div className="flex flex-col justify-between w-1/2">
      <div className="flex flex-col justify-center align-middle gap-4 my-auto">
        <h1>About me</h1>
        <p>
          I’m Raeesa, an astrophysicist turned full stack developer. I’m
          passionate about blending scientific curiosity with creative
          technology to build meaningful digital experiences.
        </p>
      </div>
      <button
        className="button-border w-1/2 mx-auto mb-28 py-2"
        onClick={onScrollToSection}
      >
        Learn more about my journey
      </button>
    </div>
  </div>
);
