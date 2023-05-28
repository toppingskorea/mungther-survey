import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { SubmitModalInitialState, SubmitModalState } from "./submitModal.types";

const initialState: SubmitModalInitialState = {
  isOpen: false,
};

export const useSubmitModalStore = create(
  immer<SubmitModalState>((set) => ({
    ...initialState,
    onOpen: () => {
      set((state) => {
        state.isOpen = true;
      });
    },
    onClose: () => {
      set((state) => {
        state.isOpen = false;
      });
    },
  }))
);
