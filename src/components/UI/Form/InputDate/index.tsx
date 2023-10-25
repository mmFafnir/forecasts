"use client";

import { ChangeEvent, FC } from "react";
import styles from "./inputDate.module.scss";
import Calendar from "../../Icons/Form/Calendar";

interface IProps {
  size?: "big" | "middle" | "small";
  onChange: (data: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
}

const InputDate: FC<IProps> = ({ size = "middle", onChange, error }) => {
  return (
    <div className={`${styles.body} ${styles[size]}`}>
      <div className={styles.date}>
        <input onChange={(e) => onChange(e)} type="date" />
        <Calendar />
      </div>
      {error && <span className={`input-error ${size}`}>{error}</span>}
    </div>
  );
};

export default InputDate;
