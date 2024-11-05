import { createContext, useState, PropsWithChildren, useContext } from 'react';

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<ThemeContextType | null>(null);

export default function DarkModeProvider({ children }: PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);
  if (context === null) {
    throw new Error(
      "useUserContext doit être utilisé au sein d'un UserContextProvider"
    );
  }
  return context;
};
