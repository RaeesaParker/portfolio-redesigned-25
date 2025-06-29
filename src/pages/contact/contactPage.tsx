import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { ColourSwitcher } from '../../common/colourSwitcher';

export const ContactPage = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-[var(--color-blue-50)] dark:bg-[var(--color-blue-900)] px-4 py-12">
      <ColourSwitcher />

      <div className="w-full max-w-2xl bg-white dark:bg-[var(--color-blue-850)] rounded-xl shadow-lg p-8 flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold text-[var(--color-blue-700)] dark:text-[var(--color-blue-100)] mb-2">
            Get in Touch
          </h2>
          <p className="text-[var(--color-blue-900)] dark:text-[var(--color-blue-50)] mb-4">
            If you have a question, would like to work together, or just want to
            say hi, please send me a message!
          </p>
        </div>
        <form
          action="https://formspree.io/f/xzbqpgdj"
          method="POST"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="firstname"
              placeholder="First Name..."
              required
              className="flex-1 p-3 rounded border border-[var(--color-blue-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] bg-[var(--color-white-50)] dark:bg-[var(--color-blue-850)]"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name..."
              required
              className="flex-1 p-3 rounded border border-[var(--color-blue-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] bg-[var(--color-white-50)] dark:bg-[var(--color-blue-850)]"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email..."
            required
            className="p-3 rounded border border-[var(--color-blue-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] bg-[var(--color-white-50)] dark:bg-[var(--color-blue-850)]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject..."
            required
            className="p-3 rounded border border-[var(--color-blue-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] bg-[var(--color-white-50)] dark:bg-[var(--color-blue-850)]"
          />
          <textarea
            name="message"
            placeholder="Say Hi..."
            required
            rows={5}
            className="p-3 rounded border border-[var(--color-blue-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold-500)] bg-[var(--color-white-50)] dark:bg-[var(--color-blue-850)] resize-none"
          />
          <button
            type="submit"
            className="button-border w-full mt-2 py-2 font-semibold text-lg"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/RaeesaParker"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-gold-500)] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/raeesa-parker/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--color-gold-500)] transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="/RaeesaParkerCV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-base underline hover:text-[var(--color-gold-500)] transition-colors"
              download
            >
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
