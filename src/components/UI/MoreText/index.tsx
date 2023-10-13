"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./moreText.module.scss";

interface IProps {
  children: string;
  defaultHeight?: number;
  isOpen: boolean;
  classStyle?: string;
}

const MoreText: FC<IProps> = ({
  children,
  defaultHeight = 0,
  isOpen,
  classStyle,
}) => {
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
    if (isOpen) {
      onOpenText();
    } else {
      setHeight(defaultHeight);
    }
  }, [isOpen]);

  return (
    <div
      className={`${styles.body} ${classStyle ? classStyle : ""}`}
      style={{ height: isFull ? "auto" : height + "px" }}
    >
      <p ref={refParagraph}>{children}</p>
    </div>
  );
};

export default MoreText;
