import React from 'react';
import AboutImage from '../assets/about.png';
import { useNavigate } from 'react-router-dom';

export const About = ({
  aboutRef,
}: {
  aboutRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const navigate = useNavigate();

  return (
    <div
      ref={aboutRef}
      className="flex flex-row md:flex-row items-center justify-center w-full  h-dvh px-8 py-16 gap-8"
    >
      <div className="flex-1 flex flex-col items-start justify-center max-w-xl gap-5">
        <h2 className="mb-2 ">About me</h2>
        <h3 className="mb--4">From studying stars to building software</h3>
        <p className="text-base leading-relaxed">
          I apply the analytical thinking and problem-solving skills I developed
          in astronomy to create innovative digital solutions as a full stack
          developer.
        </p>
        <p>
          I'm currently part of the{' '}
          <span className="text-[var(--color-blue-600)] ">
            Innovation Team at Lancaster University,
          </span>{' '}
          building all sorts of wonderful things across web, mobile, AR, and VR.
        </p>

        <button
          className="button-border w-1/2 mt-3"
          onClick={() => {
            navigate('/about');
          }}
        >
          Learn more
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center ">
        <img src={AboutImage} alt="About illustration" className="w-2/3" />
      </div>
    </div>
  );
};
