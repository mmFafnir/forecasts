"use client";

import { FC, ReactElement } from "react";
import styles from "./forecast.module.scss";
import ForecastPerson from "./ForecastPerson";
import ForecastMatch from "./ForecastMatch";
import LikeIcon from "@/components/UI/Icons/LikeIcon";
import DislikeIcon from "@/components/UI/Icons/DislikeIcon";
import PointMenu from "@/components/UI/PointsMenu";
import { forecastMenuItems } from "@/assets/data/forecastMenu";
import { useTypeSelector } from "@/hooks/useTypeSelector";

interface IProps {
  version?: "forecast" | "user-forecast";
}

const ForecastCard: FC<IProps> = ({ version = "forecast" }) => {
  const { light } = useTypeSelector((state) => state.themeLight);

  return (
    <div
      className={`${styles.body} ${styles[version]} ${
        light ? styles.themeLight : ""
      }`}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <ForecastPerson />
          <div className="flex">
            <div className={styles.time}>
              <p>
                Сегодня, <span>13:55</span>
              </p>
            </div>
            <PointMenu items={forecastMenuItems} />
          </div>
        </div>

        <div className={styles.content}>
          <ForecastMatch version={version} />
        </div>

        <div className={styles.text}>
          Всем доброго времени суток!Мадагаскар принимает Малави.Мадагаскар -
          крайне слабая сборная и шансов зацепиться хотя бы за что-то нет.
          Проиграл Эсватини, Южной Африки.. А Малава, в свою очередь, Эсватини
          8:0 закрывает, да и в гостях Южную Африку обыгрывает. Сборная Малави
          уже вышла из группы, но в последнем матче можно и поразвлекаться.
          Думаю, что тут будет разгром.
          <br />
          Всем удачи!
        </div>

        <div className={styles.footer}>
          <p>
            <span>Ставка</span>
            <span style={{ color: "#66DA64" }}>1500 (10%)</span>
          </p>

          <div className="flex">
            <button className="like">
              <LikeIcon />
              <span>31</span>
            </button>
            <button className="dislike">
              <DislikeIcon />
              <span>4</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
