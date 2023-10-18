"use client";

import { FC } from "react";
import styles from "./plusButton.module.scss";
import PlusIcon from "../../Icons/PlusIcon";

const PlusButton: FC = () => {
  return (
    <button className={styles.button}>
      <span>Добавить прогноз</span>
      <span>
        <PlusIcon />
      </span>
    </button>
  );
};

export default PlusButton;
