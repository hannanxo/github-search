import React, { createContext, useContext, useReducer, useEffect } from "react";

type DarkModeAction = {
  type: "TOGGLE_DARK_MODE";
};

type DarkModeContextProps = {
  darkMode: boolean;
  dispatch: React.Dispatch<DarkModeAction>;
};

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

const darkModeReducer = (state: boolean, action: DarkModeAction): boolean => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      const newDarkMode = !state;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    default:
      return state;
  }
};

const DarkModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialState: boolean = storedDarkMode ? JSON.parse(storedDarkMode) : false;
  const [darkMode, dispatch] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const contextValue: DarkModeContextProps = { darkMode, dispatch };

  return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
};

const useDarkModeContext = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkModeContext must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkModeContext };
