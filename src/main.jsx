import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { COURSE_STEPS, EBOOKS_DATA } from './data.js';
import './styles.css';

window.COURSE_STEPS = COURSE_STEPS;
window.EBOOKS_DATA = EBOOKS_DATA;

createRoot(document.getElementById('root')).render(<App />);
