import { EnumThemes } from "@/GlobalRedux/Slices/themeSlice";
import theme from "../data/theme";
interface ITheme {
  [key: string]: string;
}

export const changeThemeStyle = (themeCurrent: EnumThemes) => {
  const newTheme: ITheme = theme[themeCurrent];
  for (const key in newTheme) {
    document.documentElement.style.setProperty(key, newTheme[key]);
  }
};
