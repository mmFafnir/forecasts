"use client";

import React, { FC, ReactNode, useRef, useState } from "react";
import styles from "./select.module.scss";
import { Scrollbar } from "react-scrollbars-custom";

type selectClass = "absolute" | "purple" | "transparent";

interface IProps {
  items: string[];
  icon?: ReactNode;
  classes?: selectClass[];
}

const Select: FC<IProps> = ({ items, icon, classes }) => {
  const [value, setValue] = useState<string>(items[0]);
  const [height, setHeight] = useState<number>(0);

  const bodyRef = useRef<HTMLDivElement | null>(null);

  const onOpenSelect = () => {
    if (!bodyRef.current) return;
    setHeight(105);
  };
  const onCloseSelect = () => {
    setHeight(0);
  };

  const onClickButton = (value: string) => {
    setValue(value);
    onCloseSelect();
  };

  return (
    <div
      ref={bodyRef}
      className={`${styles.select} ${
        classes ? classes.map((item) => styles[item]).join(" ") : ""
      } ${height > 0 ? styles.show : ""} `}
    >
      <button
        type="button"
        className={styles.title}
        onClick={() => {
          height > 0 ? onCloseSelect() : onOpenSelect();
        }}
      >
        {icon ? icon : null}
        <span>{value}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={styles.body} style={{ maxHeight: `${height}px` }}>
        <Scrollbar
          momentum={true}
          noScroll={true}
          style={{ width: "100%", height: 105 }}
        >
          {items.map((item, index) => (
            <button
              type="button"
              key={index}
              className={item == value ? styles.buttonActive : ""}
              onClick={() => onClickButton(item)}
            >
              {item}
            </button>
          ))}
        </Scrollbar>
      </div>
    </div>
  );
};

export default Select;
