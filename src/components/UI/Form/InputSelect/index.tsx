"use client";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./inputSelect.module.scss";
import { Scrollbar } from "react-scrollbars-custom";

type TItem = { value: string; text: string };

interface IProps {
  items: TItem[];
  defaultTitle?: TItem;
  size?: "big" | "middle" | "small";
  onChange: (value: string) => void;
}

const SCROLL_HIGHT = 200;

const InputSelect: FC<IProps> = ({
  items,
  defaultTitle = items[0],
  size = "middle",
  onChange,
}) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState<TItem>(defaultTitle);
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

  const onChangeSelect = (item: TItem) => {
    setTitle(item);
    onCloseSelect();
  };

  useEffect(() => {
    onChange(title.value);
  }, [title]);

  return (
    <div
      className={`${styles.select} ${styles[size]} ${
        height > 0 ? styles.active : ""
      }`}
    >
      <button
        type="button"
        className={styles.title}
        onClick={height > 0 ? onCloseSelect : onOpenSelect}
      >
        <span>{title.text}</span>
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
                key={item.value}
                type="button"
                onClick={() => onChangeSelect(item)}
              >
                {item.text}
              </button>
            ))}
          </div>
        </Scrollbar>
      </div>
    </div>
  );
};

export default InputSelect;
