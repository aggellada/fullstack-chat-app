import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme-chat") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("theme-chat", theme);
    set({ theme });
  },
}));
