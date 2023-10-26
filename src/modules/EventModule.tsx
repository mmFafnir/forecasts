"use client";

import { closeModal } from "@/GlobalRedux/Slices/modalSlice";
import { EnumThemes, setTheme } from "@/GlobalRedux/Slices/themeSlice";
import themes from "@/assets/data/themes";
import { changeThemeStyle } from "@/assets/scripts/changeThemeStyle";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import { FC, useEffect } from "react";

const EventModule: FC = () => {
  const dispatch = useTypeDispatch();
  const { theme } = useTypeSelector((state) => state.theme);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") dispatch(closeModal());
    });

    const theme = window.localStorage.getItem("theme") as EnumThemes;
    if (theme) {
      dispatch(setTheme(theme));
    }
  }, []);

  useEffect(() => {
    for (const key in themes) {
      document.body.classList.remove(`theme-${key}`);
    }
    document.body.classList.add(`theme-${theme}`);

    changeThemeStyle(theme);
  }, [theme]);

  return <></>;
};

export default EventModule;
