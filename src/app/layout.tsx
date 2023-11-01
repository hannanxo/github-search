"use client";
import React, { useEffect, useState, ReactNode } from "react";
import { ThemeInterface, getInitialTheme, themes } from "../styles/Theme";
import styled from "@emotion/styled";
import ThemeToggle from "@/components/ThemeToggle";

const ThemedBody = styled.body<{ theme: ThemeInterface }>`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

interface LayoutProps {
  children: ReactNode;
}
const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  // after getting the intial theme its used as a key to access the corresponding theme obj
  const [theme, setTheme] = useState<ThemeInterface>(themes[getInitialTheme()]);

  useEffect(() => {
    localStorage.setItem("theme", theme === themes.light ? "light" : "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <html lang="en">
      <ThemedBody theme={theme}>
        {children}
        <ThemeToggle toggleTheme={toggleTheme} />
      </ThemedBody>
    </html>
  );
};

export default RootLayout;
