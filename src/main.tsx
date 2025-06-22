import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";

import "./index.css";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>    </BrowserRouter>
  );
} else {
  throw new Error('Root element not found');
}