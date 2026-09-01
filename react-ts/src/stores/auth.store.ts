import { create } from "zustand";
import type { User } from "../types/user";

type AuthStore = {
  /* isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void; */

  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  /* isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => set({
    isAuthenticated: value
  }), */

  user: null,
  setUser: (user: User | null) => set({
    user: user
  })

}))