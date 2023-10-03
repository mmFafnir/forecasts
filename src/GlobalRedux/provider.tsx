
"use client";
import { Provider } from "react-redux";

import { store } from "./store";
import { FC, ReactNode } from "react";

interface IProps {
    children: ReactNode
}

export const Providers:FC<IProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}