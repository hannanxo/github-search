export interface ThemeInterface {
  backgroundColor: string;
  textColor: string;
}

//
export const themes: Record<"light" | "dark", ThemeInterface> = {
  light: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },
  dark: {
    backgroundColor: "#333333",
    textColor: "#ffffff",
  },
};

export const getInitialTheme = (): "light" | "dark" => {
  const savedTheme = localStorage.getItem("theme") as "light" | "dark";
  return savedTheme || "light";
};
