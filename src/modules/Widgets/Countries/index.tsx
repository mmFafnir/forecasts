"use client";

import React, { memo, useEffect, useState } from "react";
import styles from "./countries.module.scss";
import Link from "next/link";
import WidgetWrapper from "../WidgetWrapper";
import { asyncFetchCountries } from "./actions";
import { IParamsDataCountries, TypeCountry } from "@/types/countries";
import { TypeLeagueFootball } from "@/types/leagues/football";
import Image from "@/components/UI/Custom/Image";
import { getImageSrc } from "@/utils/getImageSrc";

const Countries = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [params, setParams] = useState<IParamsDataCountries>();
  const [countries, setCountries] = useState<TypeCountry<TypeLeagueFootball>[]>(
    []
  );

  const getCountries = (search: string) => {
    setLoading(true);
    asyncFetchCountries({ search })
      .then((res) => {
        setCountries(res.data);
        setParams(res);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const onSearch = async (value: string) => {
    setTimeout(() => getCountries(value), 200);
  };

  useEffect(() => getCountries(""), []);

  return (
    <WidgetWrapper
      loading={loading}
      title="Страны"
      imgs={["img/widget/planet.svg", "img/widget/planet-dark.svg"]}
    >
      <div className={styles.countries}>
        <div className={styles.search}>
          <input
            onInput={(e) => onSearch(e.currentTarget.value)}
            type="text"
            placeholder="Поиск"
            name="search-country"
          />
        </div>
        <div className={styles.body}>
          {countries.length === 0 && <p>Пусто</p>}
          {countries.map((item) => (
            <Link
              title={item.translation}
              key={item.code}
              href={"/"}
              className={styles.item}
            >
              <Image
                src={getImageSrc(item.code + ".svg")}
                alt={item.name}
                width={20}
                height={15}
                title={item.translation}
              />
              <span>{item.translation}</span>
            </Link>
          ))}
        </div>
      </div>
    </WidgetWrapper>
  );
};

export default memo(Countries);
