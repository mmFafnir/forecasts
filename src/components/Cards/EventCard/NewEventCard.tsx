"use client";

import React, { FC } from "react";
import styles from "./newEventCard.module.scss";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import PlusIcon from "@/components/UI/Icons/PlusIcon";

const text = `
"Галатасарай" в настоящее время демонстрирует грозную форму, одержав ряд побед подряд. Недавняя победа над "Самсунспором" со счетом 4:2, а также победа над "Газиантепом" со счетом 3:0 доказывают их мощный атакующий потенциал. Игра дома также является преимуществом "Галатасарая". С другой стороны, "Копенгаген" демонстрирует непостоянную игру. Таким образом, учитывая форму обеих команд, победа "Галатасарая" представляется беспроигрышным вариантом.
Учитывая последние результаты, преимущество домашней арены и общую результативность, победа "Галатасарая" представляется наиболее вероятным исходом.
`;

const NewEventCard: FC = () => {
  const { light } = useTypeSelector((state) => state.themeLight);

  return (
    <div className={`${styles.card} ${light ? styles.themeLight : ""}`}>
      <div className={styles.header}>
        <h3>Лучшая ставка</h3>
      </div>
      <div className={styles.title}>
        <h4>Событие: Исход матча</h4>
        <button className="btn-plus">
          <span>Добавить прогноз</span>
          <span>
            <PlusIcon />
          </span>
        </button>
      </div>
      <div className={styles.body}>
        <div className={styles.item}>
          <p>Ставка:</p>
          <p>Победа Галатасарая, Кф: 1.60</p>
        </div>
        <div className={styles.item}>
          <p>КФ</p>
          <p>1.58</p>
        </div>
        <div className={styles.item}>
          <p>Риск:</p>
          <p style={{ color: "#66DA64" }}>Небольшой</p>
        </div>
      </div>
      <div className={styles.desc}>
        <div className={styles.itemDesc}>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.btn}>
        <button className="btn btn--shadow btn--pur">Сделать ставку</button>
      </div>
    </div>
  );
};

export default NewEventCard;
