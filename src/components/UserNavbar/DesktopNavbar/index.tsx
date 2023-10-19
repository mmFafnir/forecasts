"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LineActive from "./LineActive";
import Submenu from "./Submenu";
import EyeIcon from "@/components/UI/Icons/EyeIcon";
import styles from "./desktopNavbar.module.scss";

const links = [
  {
    title: "Личные данные",
    href: "/user",
  },
  {
    title: "Безопасность",
    href: "/user/security",
  },
];

const DesktopNavbar: FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.nav} id="user-navbar">
      <LineActive />
      <Submenu links={links} />
      <Link
        className={`${styles.link} line-look ${
          pathname === "/user/forecast" ? styles.active : ""
        }`}
        href={"/user/forecast"}
      >
        <EyeIcon />
        <span>Мои прогнозы</span>
      </Link>
    </div>
  );
};

export default DesktopNavbar;
