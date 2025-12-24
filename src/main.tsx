import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './i18n';
import App from './App.tsx';

// StrictMode فقط في التطوير لتحسين الأداء في الإنتاج
const isDevelopment = import.meta.env.DEV;

createRoot(document.getElementById('root')!).render(
  isDevelopment ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  )
);
