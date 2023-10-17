"use client";

import { FC } from "react";
import styles from "./breadCrumbs.module.scss";
import Link from "next/link";

interface IProps {
  crumbs: {
    name: string;
    href: string;
  }[];
}

const BreadCrumbs: FC<IProps> = ({ crumbs }) => {
  return (
    <div className={styles.body}>
      <p>
        <Link href={"/"}>
          <span>Прогнозы</span>
        </Link>
        {crumbs.map((crumb) => (
          // <p key={crumb.name}>
          <Link key={crumb.href} href={crumb.href}>
            <span>{crumb.name}</span>
          </Link>
          // </p>
        ))}
      </p>
    </div>
  );
};

export default BreadCrumbs;
