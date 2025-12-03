import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import GlobalContext from './context/GlobalContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import 'flag-icons/css/flag-icons.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <GlobalContext>
        <App />
      </GlobalContext>
    </HashRouter>
  </StrictMode>
);
