"use client";

import ForecastCard from "@/components/Cards/ForecastCard";
import { FC } from "react";
import { Scrollbar } from "react-scrollbars-custom";
import styles from "./forecast.module.scss";

const List: FC = () => {
  return (
    <Scrollbar>
      <div className={styles.list}>
        <ForecastCard version="user-forecast" />
        <ForecastCard version="user-forecast" />
        <ForecastCard version="user-forecast" />

        <ForecastCard version="user-forecast" />
        <ForecastCard version="user-forecast" />

        <ForecastCard version="user-forecast" />
      </div>
    </Scrollbar>
  );
};

export default List;
