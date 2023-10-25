"use client";
import { FC, useEffect, useState } from "react";
import styles from "./themeBtn.module.scss";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import themeObject from "@/assets/data/theme";
import { EnumThemes, setTheme } from "@/GlobalRedux/Slices/themeSlice";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import test from "node:test";

const ThemeBtn: FC = () => {
  const { theme } = useTypeSelector((state) => state.theme);

  const dispatch = useTypeDispatch();

  const onChangeColor = (newTheme: EnumThemes) => {
    dispatch(setTheme(newTheme));
    console.log("sad");
  };

  return (
    <div className={styles.themes}>
      {Object.keys(themeObject).map((currentTheme) => {
        const active = currentTheme == theme;
        const color =
          currentTheme === EnumThemes.LIGHT
            ? "#fff"
            : currentTheme === EnumThemes.DARK
            ? "#36417d"
            : currentTheme;
        return (
          <button
            key={color}
            style={{ borderColor: color }}
            className={`${styles.item} ${active ? styles.active : ""} ${
              currentTheme === theme && currentTheme == EnumThemes.LIGHT
                ? styles.light
                : ""
            }`}
            onClick={() => onChangeColor(currentTheme as EnumThemes)}
          >
            <span style={{ backgroundColor: color }}></span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeBtn;
