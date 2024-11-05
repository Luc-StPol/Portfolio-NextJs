import Contact from './_components/Contact';
import Header from './_components/Header';
import Hero from './_components/Hero';
import SkillSection from './_components/SkillsSection';
import SkillsWip from './_components/SkillsWip';
import Spacing from './_components/Spacing';
import Status from './_components/Status';
import { useContext } from 'react';
import { DarkModeContext } from './context/DarkModeContext';

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <main
      className={`font-sans h-full bg-background text-foreground ${darkMode && 'dark'}`}
    >
      <Header />
      <Spacing />
      <Hero />
      <Spacing />
      <Status />
      <Spacing />
      <SkillSection />
      <SkillsWip />
      <Spacing />
      <Contact />
    </main>
  );
}
