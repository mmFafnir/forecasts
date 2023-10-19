"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./desktopNavbar.module.scss";
import { usePathname } from "next/navigation";
import { getPosFromParent } from "@/assets/scripts/getPosFromParent";

const LineActive: FC = () => {
  const pathname = usePathname();
  const linkRef = useRef<HTMLDivElement>(null);
  const [top, setTop] = useState<number>(0);

  const onMoveToLink = () => {
    if (!linkRef.current) return;

    const select = `a[href*="${pathname.replace("/user", "")}"].line-look`;
    const link = document.querySelector(select) as HTMLElement;

    if (link) {
      const position = getPosFromParent("#user-navbar", link);
      setTop(
        position.top + link.clientHeight - linkRef.current.clientHeight / 2
      );
    } else {
      setTop(0);
    }
  };

  useEffect(() => {
    onMoveToLink();
  }, [pathname]);

  return (
    <div
      ref={linkRef}
      style={{ top: `${top}px` }}
      className={styles.line}
    ></div>
  );
};

export default LineActive;
