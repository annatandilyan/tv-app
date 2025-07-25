import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Apply dark theme by default for the streaming app
document.documentElement.classList.add('dark');

createRoot(document.getElementById('root')!).render(<App />);
