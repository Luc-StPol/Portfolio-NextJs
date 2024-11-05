'use client';

import DarkModeProvider from './context/DarkModeContext';
import App from './App';

export default function Home() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
