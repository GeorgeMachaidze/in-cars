import { create } from "zustand";
const initialState = {
  carModel: {},
};
const mainStore = create((set) => ({
  ...initialState,

  reset: () => set(initialState),

  updateData: (property, value) =>
    set((state) => ({ ...state, [property]: value })),
}));

export default mainStore;
