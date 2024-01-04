"use client";
import { FC } from "react";

import styles from "./list.module.scss";
import Group from "../Group";
import Pagination from "../UI/Pagination";
import { TLeaguesFootball } from "@/types/sports/football";

interface IProps {
  data: TLeaguesFootball[];
}

const List: FC<IProps> = ({ data }) => {
  return (
    <div className={styles.body}>
      {data.map((item) => (
        <Group item={item} key={item.id} />
      ))}
      <Pagination />
    </div>
  );
};

export default List;
