import { NextPage } from "next";
import React from "react";
import { links } from "../../assets/data/links";
import FilterTabs from "@/components/Filters/FilterTabs";
import List from "@/components/List";
import styles from "@/assets/scss/page.module.scss";
import SidebarLayout from "@/layout/SidebarLayout";
import { tabs } from "@/assets/data/tabs";
import Search from "@/components/UI/Search";
import DataBtn from "@/components/Filters/DataBtn";

interface IProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  return links.map((link) => {
    slug: link.href.replace("/", "");
  });
};

const SportPage: NextPage<IProps> = ({ params }) => {
  const currentLink = links.find((link) => link.href == `/${params.slug}`);
  return (
    <div className={styles.main}>
      <h1>
        {currentLink?.name} АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women
      </h1>
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

export default SportPage;
