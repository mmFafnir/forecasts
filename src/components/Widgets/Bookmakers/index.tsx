"use client";

import { FC, useEffect, useState } from "react";
import styles from "./bookmakers.module.scss";
import WidgetWrapper from "../../UI/WidgetWrapper";
import Image from "next/image";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import { EnumThemes } from "@/GlobalRedux/Slices/themeSlice";

const array = [1, 2, 3, 4, 5];
const Bookmakers: FC = () => {
  const { theme } = useTypeSelector((state) => state.theme);
  const [src, setSrc] = useState<string>("/img/mostbet.png");
  const [presentSrc, setPresentSrc] = useState<string>("/img/present.svg");

  useEffect(() => {
    setSrc(
      theme === EnumThemes.LIGHT ? "/img/mostbet-dark.png" : "/img/mostbet.png"
    );
    setPresentSrc(
      theme === EnumThemes.LIGHT ? "/img/present-dark.svg" : "/img/present.svg"
    );
  }, [theme]);

  return (
    <WidgetWrapper
      title="Топ букмекеры"
      imgs={["img/widget/top.svg", "img/widget/top-dark.svg"]}
    >
      <div className={styles.bookmakers}>
        {array.map((num) => (
          <div key={num} className={styles.item}>
            <div>
              <Image src={src} alt="Mostbet" width={72} height={12} />

              <p>
                <Image
                  src={presentSrc}
                  alt="иконка подарка"
                  width={14}
                  height={14}
                />
                <span>25000 ₽</span>
              </p>
            </div>
            <a className="btn btn--pur" target="_blank" href={"/"}>
              <span>На сайт</span>
            </a>
          </div>
        ))}
      </div>
    </WidgetWrapper>
  );
};

export default Bookmakers;
