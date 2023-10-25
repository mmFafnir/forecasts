"use client";

import { closeModal } from "@/GlobalRedux/Slices/modalSlice";
import { EnumThemes } from "@/GlobalRedux/Slices/themeSlice";
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
  }, []);

  useEffect(() => {
    document.body.classList.add(`theme-${theme}`);

    changeThemeStyle(theme);
  }, [theme]);

  return <></>;
};

export default EventModule;
