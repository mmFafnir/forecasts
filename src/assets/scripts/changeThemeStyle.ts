export const changeThemeStyle = (theme: "light" | "dark") => {
  if (theme === "light") {
    document.documentElement.style.setProperty("--color-dark", "#D0D2D7");
    document.documentElement.style.setProperty("--color-dark-light", "#fff");
  } else {
    document.documentElement.style.setProperty("--color-dark", "#1c203a");
    document.documentElement.style.setProperty("--color-dark-light", "#232b57");
  }
};
