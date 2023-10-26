import { NextPage } from "next";

import styles from "@/assets/scss/page.module.scss";
import FilterTabs from "@/components/Filters/FilterTabs";
import List from "@/components/List";
import SidebarLayout from "@/layout/SidebarLayout";
import { tabs } from "@/assets/data/tabs";
import Search from "@/components/UI/Search";
import DataBtn from "@/components/Filters/DataBtn";

const FootBool: NextPage = async () => {
  return (
    <div className={styles.main}>
      <h1>АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women</h1>
      <SidebarLayout>
        <div className="flex-header">
          <FilterTabs tabs={tabs} />
          <Search />
          <DataBtn />
        </div>
        <List />
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

export default FootBool;
