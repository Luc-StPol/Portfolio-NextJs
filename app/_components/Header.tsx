'use client';

import { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import DarModeIcon from './icons/DarkModeIcon';

export default function Header() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  console.log(darkMode);

  return (
    <header className="sticky top-0 py-4 flex justify-between pt-4 border-b-2 bg-background px-12 z-50">
      <a href="">
        <h1 className="text-lg font-bold text-secondary dark:text-primary max-md:hidden">
          LucSP.com
        </h1>
      </a>
      <div className="flex-1" />
      <ul className="flex items-center gap-6">
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#skills">Compétences</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button onClick={toggleDarkMode} className="ml-5">
            <DarModeIcon color={darkMode ? 'white' : 'black'} />
          </button>
        </li>
      </ul>
    </header>
  );
}
