"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./inputSelect.module.scss";
import { Scrollbar } from "react-scrollbars-custom";

interface IProps {
  items: string[];
  defaultTitle?: string;
}

const SCROLL_HIGHT = 200;

const InputSelect: FC<IProps> = ({ items, defaultTitle = items[0] }) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState<string>(defaultTitle);
  const [height, setHeight] = useState<number>(0);

  const onOpenSelect = () => {
    if (!bodyRef.current) return;
    console.log(bodyRef.current.clientHeight > SCROLL_HIGHT);
    setHeight(
      bodyRef.current.clientHeight > SCROLL_HIGHT
        ? SCROLL_HIGHT
        : bodyRef.current.clientHeight
    );
  };

  const onCloseSelect = () => {
    setHeight(0);
  };

  const onChangeSelect = (title: string) => {
    setTitle(title);
    onCloseSelect();
  };

  return (
    <div className={`${styles.select} ${height > 0 ? styles.active : ""}`}>
      <button
        type="button"
        className={styles.title}
        onClick={height > 0 ? onCloseSelect : onOpenSelect}
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <path
            d="M4 6.5L8 10.5L12 6.5"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={styles.body} style={{ height: `${height}px` }}>
        <Scrollbar
          momentum={true}
          style={{ width: "100%", height: SCROLL_HIGHT }}
        >
          <div className={styles.list} ref={bodyRef}>
            {items.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => onChangeSelect(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default InputSelect;
