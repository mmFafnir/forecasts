"use client";

import { FC, memo, useEffect, useState } from "react";
import styles from "./bookmakers.module.scss";
import WidgetWrapper from "../WidgetWrapper";
import ImageNext from "next/image";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import { EnumThemes } from "@/GlobalRedux/Slices/themeSlice";
import { asyncFetchBookmakers } from "./actions";
import { TypeBookmakers } from "@/types/bookmakers";
import Image from "@/components/UI/Custom/Image";
import { getImageSrc } from "@/utils/getImageSrc";

const array = [1, 2, 3, 4, 5];
const Bookmakers: FC = () => {
  const { theme } = useTypeSelector((state) => state.theme);
  const [presentSrc, setPresentSrc] = useState<string>("/img/present.svg");

  const [loading, setLoading] = useState<boolean>(true);
  const [bookmakers, setBookmakers] = useState<TypeBookmakers[]>([]);

  useEffect(() => {
    setPresentSrc(
      theme === EnumThemes.LIGHT ? "/img/present-dark.svg" : "/img/present.svg"
    );
  }, [theme]);

  useEffect(() => {
    asyncFetchBookmakers()
      .then((res) => {
        setBookmakers(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <WidgetWrapper
      loading={loading}
      title="Топ букмекеры"
      imgs={["img/widget/top.svg", "img/widget/top-dark.svg"]}
    >
      <div className={styles.bookmakers}>
        {bookmakers.map((item) => (
          <div key={item.id} className={styles.item}>
            <div>
              <Image
                src={getImageSrc(item.logo)}
                alt={item.name}
                width={72}
                height={12}
              />

              <p>
                <ImageNext
                  src={presentSrc}
                  alt="иконка подарка"
                  width={14}
                  height={14}
                />
                <span>{item.price} ₽</span>
              </p>
            </div>
            <a className="btn btn--pur" target="_blank" href={item.url}>
              <span>На сайт</span>
            </a>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default memo(Bookmakers);
