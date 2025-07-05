import { useNavigate } from 'react-router-dom';

import AboutImage from '../../homepage/assets/about.png';

export const TechTransition = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-center gap-16 w-full h-1/2">
      <div className="flex-1 flex items-center justify-center">
        <img
          src={AboutImage}
          alt="Raeesa working in tech"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex-[2] flex flex-col items-start justify-center gap-5 max-w-xl">
        <h2 className="mb-2">My Transition to Tech</h2>
        <p className="leading-relaxed">
          While exploring the universe, I discovered a passion for technology
          and its power to solve real-world problems. I began learning to code,
          building small projects, and soon realized that software development
          was a new way to channel my curiosity and creativity. Today, I use my
          scientific background and technical skills to create impactful digital
          solutions, always striving to make a difference through innovation.
        </p>
        <button
          className="button-border w-1/2 mt-3 py-2"
          onClick={() => navigate('/work')}
        >
          About my work
        </button>
      </div>
    </section>
  );
};
