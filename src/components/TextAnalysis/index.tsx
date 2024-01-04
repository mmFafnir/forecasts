"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./textAnalysis.module.scss";

const defaultHeight = 81;

interface IProps {
  text: string;
}
const TextAnalysis: FC<IProps> = ({ text }) => {
  const refParagraph = useRef<HTMLParagraphElement | null>(null);
  const [height, setHeight] = useState<number>(defaultHeight);
  const [isFull, setIsFull] = useState<boolean | null>(false);
  const onOpenText = () => {
    if (!refParagraph.current) return;
    setHeight(refParagraph.current.offsetHeight);
  };

  useEffect(() => {
    setIsFull(
      refParagraph.current && refParagraph.current.offsetHeight <= defaultHeight
    );
  }, []);

  return (
    <div className={styles.analysis}>
      <div className={styles.wrapper}>
        <h3>Анализ:</h3>
        <div
          className={styles.text}
          style={{ height: isFull ? "auto" : height + "px" }}
        >
          <p ref={refParagraph}>{text}</p>
        </div>
      </div>
      {!isFull && (
        <button
          className="show-more"
          onClick={() =>
            height <= defaultHeight ? onOpenText() : setHeight(defaultHeight)
          }
        >
          {height > defaultHeight ? "Скрыть." : "Читать полность."}
        </button>
      )}
    </div>
  );
};

export default TextAnalysis;
