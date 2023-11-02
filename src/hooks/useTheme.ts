/*
Get the theme's value stored in the localStorage. If none is found it
returns the default value (light)
*/
export const getInitialTheme = (): "light" | "dark" => {
  const savedTheme = localStorage.getItem("theme") as "light" | "dark";
  return savedTheme || "light";
};
