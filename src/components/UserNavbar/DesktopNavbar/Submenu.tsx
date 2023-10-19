"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./desktopNavbar.module.scss";
import HomeIcon from "../../UI/Icons/HomeIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IProps {
  links: {
    title: string;
    href: string;
  }[];
}

const Submenu: FC<IProps> = ({ links }) => {
  const pathname = usePathname();

  const refBody = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  const onCloseMenu = () => setHeight(0);
  const onOpenMenu = () => {
    if (!refBody.current) return;
    setHeight(refBody.current.clientHeight);
  };

  useEffect(() => {
    onOpenMenu();
  }, []);

  return (
    <div className={styles.menu}>
      <button
        onClick={height !== "auto" && height > 0 ? onCloseMenu : onOpenMenu}
        className={`${styles.menuTitle} ${
          height !== "auto" && height > 0 ? styles.active : ""
        }`}
      >
        <HomeIcon />
        <span>Главная</span>
      </button>
      <div
        className={styles.menuBody}
        style={{ height: height !== "auto" ? `${height}px` : "auto" }}
      >
        <div ref={refBody}>
          {links.map((link) => (
            <Link
              key={link.href}
              className={pathname === link.href ? styles.active : ""}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Submenu;
