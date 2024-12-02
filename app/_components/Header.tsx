'use client';

import { useDarkModeContext } from '../context/DarkModeContext';
import DarkModeIcon from './icons/DarkModeIcon';

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  console.log(darkMode);

  return (
    <header className="sticky top-0 py-4 flex justify-between pt-4 border-b-2 bg-background md:px-12 z-50">
      <a href="">
        <h1 className="text-lg font-bold text-dark dark:text-primary max-md:hidden">
          LucSP.fr
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
            <DarkModeIcon color={darkMode ? 'white' : 'black'} />
          </button>
        </li>
      </ul>
    </header>
  );
}
