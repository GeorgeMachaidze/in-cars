import { create } from "zustand";
const initialState = {
  carModel: {},
};

const mainStore = create((set) => ({
  ...initialState,
  language: "ge",
  setLanguage: (lang) => {
    set({ language: lang });
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedLanguage", lang);
    }
  },
  loadLanguage: () => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("selectedLanguage");
      if (savedLang) set({ language: savedLang });
    }
  },

  reset: () => set(initialState),

  updateData: (property, value) =>
    set((state) => ({ ...state, [property]: value })),
}));

export default mainStore;
