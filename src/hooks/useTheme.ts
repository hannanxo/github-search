/*
Get the theme's value stored in the localStorage.
*/
import { useState, useEffect } from "react";

export const useDarkMode = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Read dark mode preference from local storage, default to false (light mode)
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    // Save dark mode preference to local storage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
