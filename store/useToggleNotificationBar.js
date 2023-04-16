import { create } from "zustand";

const useToggleNotificationBar = create((set) => ({
    isNotificationBarOpen: false,
    toggleNotificationBar: () => set((state) => ({ isNotificationBarOpen: !state.isNotificationBarOpen })),
}));

export default useToggleNotificationBar;
