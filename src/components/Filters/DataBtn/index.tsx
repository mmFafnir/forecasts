"use client";

import { FC, useRef } from "react";
import Calendar from "@/components/UI/Icons/Form/Calendar";
import styles from "./dataBtn.module.scss";
import { toDateInputValue } from "@/assets/scripts/toDateInputValue";

const date = new Date();
const DataBtn: FC = () => {
  const refInput = useRef<HTMLInputElement>(null);

  const onBlurInput = () => {
    if (!refInput.current) return;
    console.log("sad");
    refInput.current.focus();
  };

  return (
    <div className={`btn btn--pur ${styles.btn}`}>
      <Calendar />
      <input
        ref={refInput}
        defaultValue={toDateInputValue(date)}
        max="2999-09-13"
        type="date"
      />
    </div>
  );
};

export default DataBtn;
