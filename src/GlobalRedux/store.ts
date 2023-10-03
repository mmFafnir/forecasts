"use client";

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./Slices/modalSlice";



export const store = configureStore({
    reducer: {
        modal: modalSlice
    }
}) 

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;  