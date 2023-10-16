import { FC, ReactElement, useEffect, useRef, useState } from "react";
import styles from "./pointsMenu.module.scss";
import PointsIcons from "../Icons/PointsIcons";
import { useTypeSelector } from "@/hooks/useTypeSelector";

export type TPointsItem = {
  svg: ReactElement;
  text: string;
  onclick: () => void;
};

interface IProps {
  items: TPointsItem[];
}
const PointMenu: FC<IProps> = ({ items }) => {
  const { light } = useTypeSelector((state) => state.themeLight);

  const refMenu = useRef<HTMLDivElement | null>(null);
  const refBody = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [left, setLeft] = useState<number>(0);

  const onClickButton = (callback: () => void) => {
    setIsOpen(false);
    callback();
  };

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!refBody.current) return;
      const target = e.target as HTMLElement;
      if (target.closest(`.${styles.body}`) != refBody.current) {
        setIsOpen(false);
      }
    };
    if (refMenu.current) {
      setLeft(refMenu.current.clientWidth);
    }

    document.addEventListener("click", onClickOutside);

    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  return (
    <div
      ref={refBody}
      className={`${styles.body} ${light ? styles.themeLight : ""} ${
        isOpen ? styles.active : ""
      }`}
    >
      <button
        className={styles.points}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <PointsIcons />
      </button>

      <div
        ref={refMenu}
        className={styles.menu}
        style={{ left: `-${left - 20}px` }}
      >
        <div>
          {items.map((item) => (
            <button
              key={item.text}
              onClick={() => onClickButton(item.onclick)}
              className={styles.item}
            >
              {item.svg}
              <span>{item.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PointMenu;
