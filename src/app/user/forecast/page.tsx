import { NextPage } from "next";

import styles from "./forecast.module.scss";
import { Scrollbar } from "react-scrollbars-custom";
import ForecastCard from "@/components/Cards/ForecastCard";
import List from "./List";
const ForecastPage: NextPage = async () => {
  return (
    <div className={styles.main}>
      <h2>Мои прогнозы</h2>
      <div className={styles.content}>
        <List />
      </div>
    </div>
  );
};

export default ForecastPage;
