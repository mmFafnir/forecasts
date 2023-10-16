"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./userNavbar.module.scss";
import HomeIcon from "../UI/Icons/HomeIcon";
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
  const [height, setHeight] = useState<number>(0);

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
        onClick={height > 0 ? onCloseMenu : onOpenMenu}
        className={`${styles.menuTitle} ${height > 0 ? styles.active : ""}`}
      >
        <HomeIcon />
        <span>Главная</span>
      </button>
      <div className={styles.menuBody} style={{ height: `${height}px` }}>
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
