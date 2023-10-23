import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ModalEnum {
  LOGIN = "login",
  REGISTER = "register",
  AUTH = "auth",
  RESTORE = "restore",
  EVENT = "event",
  SUBMENU = "submenu",
  BURGER_MENU = "burger-menu",
  SETTINGS = "settings",
}

interface IState {
  activeModal: ModalEnum | null;
}

const initialState: IState = {
  activeModal: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalEnum>) => {
      state.activeModal = action.payload;
    },
    closeModal: (state) => {
      state.activeModal = null;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
