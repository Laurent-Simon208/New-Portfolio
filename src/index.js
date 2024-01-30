import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './homePage/HomePage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Pages/about/About';
import Works from './Pages/works/Works';
import Skills from './Pages/skills/Skills';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
