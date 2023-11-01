"use client";
import React from "react";

interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
  return (
    <button onClick={toggleTheme} style={{ cursor: "pointer" }}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
