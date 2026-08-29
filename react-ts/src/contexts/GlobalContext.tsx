import { createContext } from "react";
import type { Theme } from "../types/global";

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
}

export const GlobalContext = createContext<ThemeContextType | null>(null)