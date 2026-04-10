import React from "react";
import { useTheme } from "../../hooks/useTheme";
import "./ThemeToggle.css";

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  );
};
