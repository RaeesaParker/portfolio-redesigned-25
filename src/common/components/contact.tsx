import { useNavigate } from 'react-router-dom';

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-12 gap-4 w-full  mx-auto mt-28 mb-12 ">
      <h2>Let's work together!</h2>
      <p className="text-center">
        Interested in collaborating or have a project in mind? Reach out and
        let's make something amazing together.
      </p>
      <button
        className="button-border w-1/2 mt-2 py-2"
        onClick={() => navigate('/contact')}
      >
        Contact Me
      </button>
    </div>
  );
};
