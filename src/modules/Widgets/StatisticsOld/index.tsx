"use client";

import { FC } from "react";
import WidgetWrapper from "../WidgetWrapper";
import styles from "./statisticsOld.module.scss";

type TStatistic = {
  all: string;
  color: string;
  title: string;
  value: string;
  subTitle: string;
  coefficient?: string;
};

const statistics: TStatistic[] = [
  {
    coefficient: "1.5",
    all: "170",
    color: "#FFD644",
    title: "Общее",
    value: "150",
    subTitle: "Лучшие:",
  },
  {
    coefficient: "1.45",
    all: "50",
    color: "#66DA64",
    title: "С низким риском:",
    subTitle: "Средний коэф:",
    value: "50",
  },
  {
    coefficient: "1.85",
    all: "50",
    color: "#E88224",
    title: "Средний риск:",
    value: "45",
    subTitle: "Средний коэф:",
  },
  {
    coefficient: "2.30",
    all: "50",
    color: "#F50100",
    title: "Высокий риск:",
    value: "35",
    subTitle: "Средний коэф::",
  },
];

const StatisticsOld: FC = () => {
  return (
    <WidgetWrapper
      title="Статистика"
      loading={false}
      imgs={["img/widget/statistics.svg", "img/widget/statistics-dark.svg"]}
    >
      <div className={styles.body}>
        {statistics.map((stat, index) => (
          <div key={index} className={styles.item}>
            <p style={{ color: stat.color }}>
              <span>{stat.title}</span>
            </p>
            <p>
              <span>Всего</span>
              <span>{stat.all}</span>
            </p>
            <p>
              <span>Лучшие</span>
              <span>{stat.value}</span>
            </p>
            <p>
              <span>Средний коэф:</span>
              <span>{stat.coefficient}</span>
            </p>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default StatisticsOld;
