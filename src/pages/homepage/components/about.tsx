import React from 'react';

export const About = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}) => {
  return <div ref={aboutRef}>About</div>;
};
