"use client";
import { FC } from "react";
import styles from "./userNavbar.module.scss";
import EyeIcon from "../UI/Icons/EyeIcon";
import Submenu from "./Submenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LineActive from "./LineActive";

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

const UserNavbar: FC = () => {
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

export default UserNavbar;
