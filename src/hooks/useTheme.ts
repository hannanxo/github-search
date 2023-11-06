/*
Get the theme's value stored in the localStorage. And change the value in localStorage when the toggle triggers.
*/
import { useState, useEffect } from "react";

export const useDarkMode = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
