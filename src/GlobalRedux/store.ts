"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./Slices/modalSlice";
import themeSlice from "./Slices/themeSlice";



export const store = configureStore({
    reducer: {
        modal: modalSlice,
        themeLight: themeSlice 
    }
}) 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;  