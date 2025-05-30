
"use client"

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = "light" | "dark";

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme; // Prop still exists but its influence on initial state is overridden for "dark"
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void; // Kept for context signature, but won't change from dark
}

const initialState: ThemeProviderState = {
  theme: "dark", // Context will report "dark"
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  storageKey = "gsma-theme",
}: ThemeProviderProps) {
  // The theme state is always initialized to "dark".
  // The useState hook is kept for structural consistency with typical theme providers,
  // but its initial value is hardcoded.
  const [theme] = useState<Theme>("dark");

  useEffect(() => {
    const root = window.document.documentElement;
    // Clear any existing theme classes
    root.classList.remove("light", "dark");
    // Always apply the "dark" class
    root.classList.add("dark");
    try {
      // Ensure localStorage reflects that "dark" is the active theme.
      window.localStorage.setItem(storageKey, "dark");
    } catch (e) {
      // localStorage is not available or saving failed
      console.error("Error saving theme to localStorage", e);
    }
  }, [storageKey]); // Effect runs once on mount to set the theme

  const value = {
    theme: "dark" as Theme, // The theme context always provides "dark"
    setTheme: (newTheme: Theme) => {
      // The setTheme function is effectively a no-op since the theme is forced.
      // If called, it won't change the theme from dark.
      // This could be console.warn("Theme is fixed to dark.") if needed.
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

