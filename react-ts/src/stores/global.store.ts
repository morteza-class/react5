import { create } from "zustand";
import type { theme } from "../types/general";

type GlobalStore = {
  theme: theme;
  toggleTheme: () => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
  theme: "light",
  toggleTheme: () => {
    set((state) => {
      const newTheme: theme = state.theme === "light" ? "dark" : "light";

      document.documentElement.classList.toggle("dark", newTheme === "dark");

      return { theme: newTheme };
    })
  }
}))