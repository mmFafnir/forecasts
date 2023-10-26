"use client";

import { FC, useRef, useState } from "react";
import Calendar from "@/components/UI/Icons/Form/Calendar";
import styles from "./dataBtn.module.scss";
import DatePicker, { ReactDatePicker } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const date = new Date();
const DataBtn: FC = () => {
  const dataPickerRef = useRef<ReactDatePicker>(null);

  const [startDate, setStartDate] = useState<Date | null>(new Date());
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
    <div className={`btn btn--pur ${styles.btn}`}>
      <button onClick={onToggleCalendar}>
        <Calendar />
      </button>
      <DatePicker
        ref={dataPickerRef}
        wrapperClassName={styles.date}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd.MM.yyyy"
        onBlur={() => setIsFocus(false)}
      />
    </div>
    // <div className={`btn btn--pur ${styles.btn}`}>
    //   <Calendar />
    //   <input
    //     ref={refInput}
    //     defaultValue={toDateInputValue(date)}
    //     max="2999-09-13"
    //     type="date"
    //   />
    // </div>
  );
};

export default DataBtn;
