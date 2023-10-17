import React from "react";
import styles from "./forecast.module.scss";
import ForecastPerson from "@/components/Cards/ForecastCard/ForecastPerson";
import ForecastMatch from "@/components/Cards/ForecastCard/ForecastMatch";

const Card = () => {
  return (
    <div className={styles.card}>
      <ForecastPerson />
      <ForecastMatch version="user-forecast" />
    </div>
  );
};

export default Card;
