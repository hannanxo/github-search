import { createContext, useContext } from "react";

export type IThemeContext = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within Providers");
  }
  return context;
};
