"use client";
import React, { useEffect, useState } from "react";
import { ThemeInterface, themes } from "../styles/Theme";
import styled from "@emotion/styled";
import ThemeToggle from "@/components/ThemeToggle";
import { QueryClient, QueryClientProvider } from "react-query";
import { PropsInterface } from "@/types/PropsTypes";
import { getInitialTheme } from "@/hooks/useTheme";

const queryClient = new QueryClient();

const ThemedBody = styled.body<{ theme: ThemeInterface }>`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
`;

const RootLayout: React.FC<PropsInterface> = ({ children }) => {
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
      <QueryClientProvider client={queryClient}>
        <ThemedBody theme={theme}>
          {children}
          <ThemeToggle toggleTheme={toggleTheme} />
        </ThemedBody>
      </QueryClientProvider>
    </html>
  );
};

export default RootLayout;
