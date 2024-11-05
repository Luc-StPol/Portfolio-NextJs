'use client';

import DarkModeProvider from './context/DarkModeContext';
import App from './app';

export default function Home() {
  return (
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  );
}
