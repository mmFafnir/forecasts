import { FC } from "react";
import styles from "./forecastPerson.module.scss";
import Image from "next/image";
import StarIcon from "@/components/UI/Icons/StarIcon";

const ForecastPerson: FC = () => {
  return (
    <div className={styles.person}>
      <Image src={"/img/person.png"} alt="person" width={44} height={44} />
      <div className={styles.content}>
        <div>
          <h5 className={styles.name}>Alex45</h5>
          <p className={styles.rating}>
            <StarIcon />
            <span>4.67</span>
          </p>
        </div>
        <div className={styles.statistic}>
          <p>
            Прибыль <span style={{ color: "#66DA64" }}>+5.87%</span>
          </p>
          <p>
            Текущий банк <span style={{ color: "#66DA64" }}>1234.5</span>
          </p>
          <p>
            Ставка <span style={{ color: "#66DA64" }}>1500 (10%)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForecastPerson;
