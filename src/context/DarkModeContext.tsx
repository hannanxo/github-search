import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

interface DarkModeState {
  darkMode: boolean;
}

interface DarkModeAction {
  type: "TOGGLE_DARK_MODE";
}

interface DarkModeContextProps {
  state: DarkModeState;
  dispatch: React.Dispatch<DarkModeAction>;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

const darkModeReducer = (state: DarkModeState, action: DarkModeAction): DarkModeState => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      const newDarkMode = !state.darkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return { ...state, darkMode: newDarkMode };
    default:
      return state;
  }
};

const DarkModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const storedDarkMode = localStorage.getItem("darkMode");
  const initialState: DarkModeState = { darkMode: storedDarkMode ? JSON.parse(storedDarkMode) : false };
  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
  }, [state.darkMode]);

  return <DarkModeContext.Provider value={{ state, dispatch }}>{children}</DarkModeContext.Provider>;
};

const useDarkModeContext = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkModeContext must be used within a DarkModeProvider");
  }
  return context;
};

export { DarkModeProvider, useDarkModeContext };
