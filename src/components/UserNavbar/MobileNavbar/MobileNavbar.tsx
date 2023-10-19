"use client";

import React, { useEffect, useRef, useState } from "react";

import styles from "./mobileNavbar.module.scss";
import Link from "next/link";
import { TLinkUser, links } from "./links";
import ArrowIcon from "@/components/UI/Icons/ArrowIcon";

const MobileNavbar = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [title, setTitle] = useState<TLinkUser>(links[0]);
  const [height, setHeight] = useState<number>(0);

  const onOpenSelect = () => {
    if (!contentRef.current) return;
    setHeight(contentRef.current.clientHeight);
  };
  const onCloseSelect = () => {
    setHeight(0);
  };

  const onChangePage = (value: TLinkUser) => {
    setTitle(value);
    onCloseSelect();
  };

  return (
    <div className={styles.body}>
      <div className={`${styles.select} ${height > 0 ? styles.active : ""}`}>
        <button
          className={styles.title}
          onClick={height > 0 ? onCloseSelect : onOpenSelect}
        >
          {title.svg}
          <span>{title.title}</span>
          <ArrowIcon />
        </button>
        <div style={{ height: `${height}px` }} className={styles.content}>
          <div ref={contentRef}>
            {links.map((link) => (
              <Link
                key={link.href}
                className={link.href === title.href ? styles.active : ""}
                onClick={() => onChangePage(link)}
                href={link.href}
              >
                {link.svg}
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
