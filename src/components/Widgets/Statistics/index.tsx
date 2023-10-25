"use client";

import { FC } from "react";
import WidgetWrapper from "../../UI/WidgetWrapper";
import styles from "./statistics.module.scss";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import Image from "next/image";

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

const Statistics: FC = () => {
  return (
    <WidgetWrapper
      title="Статистика"
      imgs={["img/widget/statistics.svg", "img/widget/statistics-dark.svg"]}
    >
      <div className={styles.body}>
        {statistics.map((stat, index) => (
          <div key={index} className={styles.item}>
            <p>{index + 1}.</p>
            <p className={styles.flag}>
              <Image src={"/img/flag.svg"} alt="flag" width={12} height={12} />
            </p>
            <p className={styles.person}>
              <Image
                src={"/img/person.png"}
                height={20}
                width={20}
                alt="Alex45"
              />
              <span>Alex45</span>
            </p>
            <p style={{ color: "#66DA64" }}>{stat.coefficient}%</p>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default Statistics;
