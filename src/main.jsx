import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { COURSE_STEPS, EBOOKS_DATA } from './data.js';
import { initializeSupabase, supabase } from './lib/supabase.js';
import './styles.css';

window.COURSE_STEPS = COURSE_STEPS;
window.EBOOKS_DATA = EBOOKS_DATA;
window.aprendaAuth = {
  configured: Boolean(supabase),
  client: supabase,
};

initializeSupabase().catch((error) => {
  console.error('Falha ao inicializar autenticação:', error);
  window.applySupabaseSession?.(null);
}).finally(() => {
  createRoot(document.getElementById('root')).render(<App />);
});
