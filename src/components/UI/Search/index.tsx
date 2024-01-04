"use client";

import { FC, useEffect, useRef, useState } from "react";
import styles from "./search.module.scss";
import SearchIcon from "../Icons/SearchIcon";

interface IProps {}
const Search: FC<IProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onBlurSearch = () => {
    if (inputRef.current && inputRef.current.value.length === 0) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!inputRef.current) return;
    if (isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.value = "";
    }
  }, [isOpen]);

  return (
    <div className={`${styles.search} ${isOpen ? styles.open : ""}`}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={styles.icon}
      >
        <SearchIcon />
      </button>
      <div className={styles.input}>
        <input ref={inputRef} type="text" />
      </div>
    </div>
  );
};

export default Search;
