import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Ensure the element with ID "root" exists
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found!");
}
