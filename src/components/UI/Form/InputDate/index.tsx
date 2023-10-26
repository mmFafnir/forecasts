"use client";

import { ChangeEvent, FC, useRef, useState } from "react";
import styles from "./inputDate.module.scss";
import Calendar from "../../Icons/Form/Calendar";
import DatePicker, { ReactDatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  size?: "big" | "middle" | "small";
  onChange: (data: any) => void;
  value: Date | null;
  error?: string;
}

const InputDate: FC<IProps> = ({ size = "middle", onChange, error, value }) => {
  const dataPickerRef = useRef<ReactDatePicker>(null);

  const [isFocus, setIsFocus] = useState(false);

  const onToggleCalendar = () => {
    if (!dataPickerRef.current) return;
    if (isFocus) {
      dataPickerRef.current.setBlur();
    } else {
      dataPickerRef.current.setFocus();
    }
    setIsFocus((prev) => !prev);
  };

  return (
    <div className={`${styles.body} ${styles[size]}`}>
      <div className={styles.date}>
        <DatePicker
          ref={dataPickerRef}
          wrapperClassName={styles.input}
          selected={value}
          onChange={onChange}
          dateFormat="dd.MM.yyyy"
          onBlur={() => setIsFocus(false)}
        />
        <button onClick={onToggleCalendar}>
          <Calendar />
        </button>
      </div>
      {error && <span className={`input-error ${size}`}>{error}</span>}
    </div>
  );
};

export default InputDate;
