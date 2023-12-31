import { NextPage } from "next";
import SidebarLayout from "@/layout/SidebarLayout";
import Select from "@/components/UI/Select";
import { sort } from "@/assets/data/sort";
import styles from "./ai.module.scss";
import ForecastCard from "@/components/Cards/ForecastCard";
import { widgets } from "./widgets";
import SortIcon from "@/components/UI/Icons/SortIcon";

const AIFootBool: NextPage = async () => {
  return (
    <div className={styles.main}>
      <h1>АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women</h1>
      <SidebarLayout widgets={widgets}>
        <div className={`flex-header ${styles.tabs}`}>
          <button className="btn p-20 btn--pur btn--shadow">
            <span>Добавить прогноз</span>
            <span className="plus-icon"></span>
          </button>
          <Select
            icon={<SortIcon />}
            classes={["absolute", "transparent"]}
            items={sort.map((item) => item.title)}
          />
        </div>

        <div className={styles.content}>
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
          <ForecastCard />
        </div>

        <p className="desc-text">
          Определите будущее и выигрывайте с нашими прогнозами матчей! Наши
          аналитики исследуют статистику и тренды, чтобы предсказать результаты
          спортивных событий. Поднимите ставки на новый уровень с нашими
          экспертами!. Определите будущее и выигрывайте с нашими прогнозами
          матчей! Наши аналитики исследуют статистику и тренды, чтобы
          предсказать результаты спортивных событий. Поднимите ставки на новый
          уровень с нашими экспертами!
        </p>
      </SidebarLayout>
    </div>
  );
};

export default AIFootBool;
