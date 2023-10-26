"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EnumThemes {
  LIGHT = "light",
  DARK = "dark",
  BROWN = "brown",
}

interface IState {
  theme: EnumThemes;
}

const initialState: IState = {
  theme: EnumThemes.DARK,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<EnumThemes>) => {
      state.theme = action.payload;
      window.localStorage.setItem("theme", action.payload);
    },
  },
});
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
