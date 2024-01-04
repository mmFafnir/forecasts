"use client";

import React, { memo, useEffect, useState } from "react";
import styles from "./leagues.module.scss";
import WidgetWrapper from "../WidgetWrapper";
import Link from "next/link";
import { asyncFetchLeagues } from "./actions";
import { IPindLeaguesFootball } from "@/types/leagues/football";
import Image from "@/components/UI/Custom/Image";
import { getImageSrc } from "@/utils/getImageSrc";
const array = [1, 2, 3, 4, 5];

const Leagues = () => {
  const [data, setData] = useState<IPindLeaguesFootball[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    asyncFetchLeagues()
      .then((res) => {
        if (!res.data) return;
        setData(res.data);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <WidgetWrapper
      open={true}
      title="Популярные лиги"
      imgs={["img/widget/fire.svg", "img/widget/fire-dark.svg"]}
      loading={loading}
    >
      <div className={styles.body}>
        {data.map(({ league }) => (
          <Link
            title={league.league_name}
            key={league.id}
            className={styles.item}
            href={"/"}
          >
            <Image
              src={getImageSrc(league.league_cc + ".svg")}
              alt={league.league_name}
              width={20}
              height={15}
            />
            <span>{league.league_name}</span>
          </Link>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default memo(Leagues);
