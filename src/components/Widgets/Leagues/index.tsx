"use client";

import React from "react";
import styles from "./leagues.module.scss";
import WidgetWrapper from "../../UI/WidgetWrapper";
import Link from "next/link";
import Image from "next/image";
const array = [1, 2, 3, 4, 5];

const Leagues = () => {
  return (
    <WidgetWrapper
      open={true}
      title="Популярные лиги"
      imgs={["img/widget/fire.svg", "img/widget/fire-dark.svg"]}
    >
      <div className={styles.body}>
        {array.map((num) => (
          <Link key={num} className={styles.item} href={"/"}>
            <Image
              src={"/img/flag.svg"}
              alt="Флаг британия"
              width={20}
              height={15}
            />
            <span>Название лиги</span>
          </Link>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default Leagues;
