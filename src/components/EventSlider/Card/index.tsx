import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";
import TimeIcon from "@/components/UI/Icons/TimeIcon";
import { useTypeSelector } from "@/hooks/useTypeSelector";

const Card: FC = () => {
  const { light } = useTypeSelector((state) => state.themeLight);

  return (
    <Link
      href={"/football/match"}
      className={`${styles.item} ${light ? styles.themeLight : ""}`}
    >
      <div className={styles.flex}>
        <div className={styles.team}>
          <Image
            src={"/img/teams/1.png"}
            alt="Манчестер Юнайтед"
            width={23}
            height={28}
          />
          <p>
            <span>Манчестер Юнайтед</span>
            <span>(Manchester United)</span>
          </p>
        </div>
        <div className={styles.team}>
          <Image
            src={"/img/teams/2.png"}
            alt="Манчестер Юнайтед"
            width={23}
            height={28}
          />
          <p>
            <span>Манчестер Юнайтед</span>
            <span>(Manchester United)</span>
          </p>
        </div>
      </div>
      <div className={styles.date}>
        <p>20 сентября 2023 19:45 UTC+3</p>
      </div>
      <div className={styles.time}>
        <TimeIcon />
        <span>Осталось: 5 часов</span>
      </div>
    </Link>
  );
};

export default Card;
