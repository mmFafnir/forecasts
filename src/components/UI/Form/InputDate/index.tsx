import { FC } from "react";
import styles from "./inputDate.module.scss";

const InputDate: FC = () => {
  return (
    <div className={styles.body}>
      <div className={styles.date}>
        <input type="date" />
      </div>
    </div>
  );
};

export default InputDate;
