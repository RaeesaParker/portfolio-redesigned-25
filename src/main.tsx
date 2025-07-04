import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.tsx';

import './index.css';
import { AboutPage } from './pages/about/aboutPage.tsx';
import { WorkPage } from './pages/work/workPage.tsx';
import { ContactPage } from './pages/contact/contactPage.tsx';

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
} else {
  throw new Error('Root element not found');
}
