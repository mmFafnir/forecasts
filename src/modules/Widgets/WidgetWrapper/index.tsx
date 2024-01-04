"use client";

import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./widget.module.scss";
import Image from "next/image";

interface IProps {
  children: ReactNode;
  title: string;
  imgs: string[];
  open?: boolean;
  loading?: boolean;
  empty?: boolean;
}

const WidgetWrapper: FC<IProps> = ({
  children,
  title,
  imgs,
  open = false,
  loading = true,
}) => {
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState<number>(1000);
  const [accMob, setAccMob] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const [src, setSrc] = useState<string>(imgs[0]);

  const onOpenAcc = () => {
    if (!bodyRef.current) return;
    setHeight(bodyRef.current.offsetHeight);
  };

  const onCloseAcc = () => {
    setHeight(0);
  };

  useEffect(() => {
    setSize(window.innerWidth);
    const resize = () => setSize(window.innerWidth);
    window.addEventListener("resize", resize);
    if (window.innerWidth <= 800 && open) {
      onOpenAcc();
    }
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (size <= 800) {
      setAccMob(true);
      if (height > 0) {
        onOpenAcc();
      }
    } else {
      setAccMob(false);
    }
  }, [size]);

  return (
    <div className={`${styles.widget} ${height > 0 ? styles.active : ""}`}>
      <div
        className={styles.header}
        onClick={() => (height > 0 ? onCloseAcc() : onOpenAcc())}
      >
        <Image src={"/" + src} alt={title} width={20} height={20} />
        <p>{title}</p>
        {accMob && (
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M15 13L10 8L5 13"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={styles.body}
        style={{ height: accMob ? height + "px" : "auto" }}
      >
        <div
          className={`${styles.loader} ${loading ? styles.loaderActive : ""}`}
        >
          <span className="loader-spin"></span>
        </div>
        <div className={`${loading ? styles.loading : ""}`} ref={bodyRef}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default WidgetWrapper;
