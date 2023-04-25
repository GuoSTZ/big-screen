import React from 'react';
import { createRoot } from 'react-dom/client';
import './utils/flexible';

const root = createRoot(document.getElementById('root')!);

const App = () => {
  return (
    <div>123</div>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
