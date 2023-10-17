import { FC } from "react";
import styles from "./forecastPerson.module.scss";
import Image from "next/image";
import StarIcon from "@/components/UI/Icons/StarIcon";
import PeopleIcon from "@/components/UI/Icons/PeopleIcon";

const ForecastPerson: FC = () => {
  return (
    <div className={styles.person}>
      <div className={styles.img}>
        <Image src={"/img/person.png"} alt="person" width={44} height={44} />
        <button>
          <span>+</span>
        </button>
      </div>
      <div className={styles.content}>
        <div>
          <h5 className={styles.name}>Alex45</h5>
          {/* <p className={styles.rating}>
            <StarIcon />
            <span>4.67</span>
          </p> */}
          <p className={styles.subscribers}>
            <PeopleIcon />
            <span>
              <b>355</b> отслеживающих
            </span>
          </p>
        </div>
        <div className={styles.statistic}>
          <p>
            Стартовый банк <span style={{ color: "#ADADAD" }}>1234.5</span>
          </p>
          <p>
            Прибыль <span style={{ color: "#66DA64" }}>+5.87%</span>
          </p>
          <p>
            Текущий банк <span style={{ color: "#66DA64" }}>1234.5</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForecastPerson;
