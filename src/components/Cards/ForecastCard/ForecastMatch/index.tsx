"use client";

import { FC, useEffect, useState } from "react";
import styles from "./forecastMatch.module.scss";
import Image from "next/image";
import Link from "next/link";
import MoreText from "@/components/UI/MoreText";

const text = `
  "Галатасарай" в настоящее время демонстрирует грозную форму, одержав
  ряд побед подряд. Недавняя победа над "Самсунспором" со счетом 4:2, а
  также победа над "Газиантепом" со счетом 3:0 доказывают их мощный
  атакующий потенциал. Игра дома также является преимуществом
  "Галатасарая". С другой стороны, "Копенгаген" демонстрирует
  непостоянную игру. Таким образом, учитывая форму обеих команд, победа
  "Галатасарая" представляется беспроигрышным вариантом. Учитывая
  последние результаты, преимущество домашней арены и общую
  результативность, победа "Галатасарая" представляется наиболее
  вероятным исходом.
`;

const ForecastMatch: FC = () => {
  const [isOpenText, setIsOpenText] = useState<boolean>(false);

  const [isMob, setMob] = useState<boolean>(false);

  useEffect(() => {
    const resize = () => {
      setMob(window.innerWidth > 600 ? false : true);
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.match}>
        {isMob && (
          <p className={styles.breadcrumbs}>
            <span>Футбол</span>
            <span>Лига Европы 2039</span>
          </p>
        )}
        <div className={styles.team}>
          <Image
            src={"/img/teams/1.png"}
            alt={"Манчестер Юнайтед (Manchester United)"}
            width={36}
            height={36}
          />
          <p>
            <span>Манчестер Юнайтед</span>
            <span>(Manchester United)</span>
          </p>
        </div>
        <div className={styles.center}>
          {!isMob && (
            <p className={styles.breadcrumbs}>
              <span>Футбол</span>
              <span>Лига Европы 2039</span>
            </p>
          )}
          <div className={styles.date}>
            <p>20 сентября 2023</p>
            <p className={styles.time}>
              <span>19:45 </span>
              <span>UTC+3</span>
            </p>
          </div>
        </div>
        <div className={styles.team}>
          <Image
            src={"/img/teams/2.png"}
            alt={"Копенгаген (København)"}
            width={36}
            height={36}
          />
          <p>
            <span>Копенгаген</span>
            <span>(København)</span>
          </p>
        </div>
      </div>
      <div className={styles.statistic}>
        <p>
          <span>Событие:</span>
          <span>Исход матча</span>
        </p>
        <p>
          <span>Ставка:</span>
          <Link className={styles.border} href={"/football/match"}>
            Победа Копенгагена
          </Link>
        </p>
        <p>
          <span>КФ:</span>
          <span className={styles.border}>1.58</span>
        </p>
        <p>
          <span>Риск:</span>
          <span style={{ color: "#66DA64" }}>Небольшой</span>
        </p>
      </div>

      <div className={styles.text}>
        <button
          className={`show-more ${isOpenText ? "active" : ""}`}
          onClick={() => setIsOpenText((prev) => !prev)}
        >
          <span>Подробнее</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <MoreText
          classStyle={`${styles.desc} ${isOpenText ? styles.descShow : ""}`}
          isOpen={isOpenText}
        >
          {text}
        </MoreText>
      </div>
    </div>
  );
};

export default ForecastMatch;
