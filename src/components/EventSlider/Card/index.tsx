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
      <h3>Европа: Лига чемпионов - групповой этап</h3>
      <div className={styles.date}>
        <p>20 сентября 2023</p>
        <p>
          <span>19:45</span>
          <span>UTC+3</span>
        </p>
        <p className={styles.time}>
          <TimeIcon />
          <span>Осталось: 5 часов</span>
        </p>
      </div>
      <div className={styles.teams}>
        <div className={styles.team}>
          <Image
            src={"/img/teams/1.png"}
            alt="Манчестер Юнайтед (Manchester United)"
            width={104}
            height={75}
          />
          <p>
            <span>Манчестер Юнайтед</span>
            <span>(Manchester United)</span>
          </p>
        </div>
        <div className={styles.team}>
          <Image
            src={"/img/teams/2.png"}
            alt="Копенгаген (København)"
            width={104}
            height={75}
          />
          <p>
            <span>Манчестер Юнайтед</span>
            <span>(Manchester United)</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
