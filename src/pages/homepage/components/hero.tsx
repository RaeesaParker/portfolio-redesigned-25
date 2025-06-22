export const Hero = () => {
  return (
    <div className="flex justify-center align-middle text-center ">
      <div className="flex flex-col">
        <h1>Hello, I'm Raeesa</h1>
        <h2>
          Astrophysicist
          <span className="inline-block mx-1 align-middle">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path
                d="M7 15l5-5-5-5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Full Stack Developer
        </h2>
        <p>
          I bring together data-driven insights, creative problem-solving, and a
          versatile development toolkit to build impactful, cross-platform
          digital solutions.
        </p>
      </div>
    </div>
  );
};
