"use client";
import { FC } from "react";
import styles from "./present.module.scss";
import { Scrollbar } from "react-scrollbars-custom";

const items = [
  {
    title: "Фрибет 1000 ₽ всем новым пользователям!",
    actions: ["новый"],
  },
  {
    title: "Бонусные 300 ₽ на счет по коду: GDH776",
    actions: [],
  },
  {
    title: "100 ₽ на счет при ставке сегодня",
    actions: [],
  },
  {
    title: "100 ₽ на счет при ставке сегодня",
    actions: [],
  },
  {
    title: "100 ₽ на счет при ставке сегодня",
    actions: [],
  },
  {
    title: "100 ₽ на счет при ставке сегодня",
    actions: [],
  },
];

const Present: FC = () => {
  return (
    <div className={styles.body}>
      <Scrollbar className={`${styles.scrollbar} track-right`}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <div className={styles.actions}>
              {item.actions.map((action) => (
                <span key={action}>{action}</span>
              ))}
            </div>
            <p className={styles.title}>{item.title}</p>
            <button className={`${styles.btn} btn btn--pur btn--no-shadow`}>
              Получить
            </button>
          </div>
        ))}
      </Scrollbar>
    </div>
  );
};

export default Present;
