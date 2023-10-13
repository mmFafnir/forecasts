"use client";
import { FC } from "react";
import styles from "./eventSlider.module.scss";
import Image from "next/image";
import TimeIcon from "../UI/Icons/TimeIcon";

import Link from "next/link";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import Card from "./Card";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const EventSlider: FC = () => {
  return (
    <div className={`${styles.body} container`}>
      <h4>Похожие события:</h4>
      <div className={`${styles.wrapper}`}>
        {array.map((slider, index) => (
          <Card key={index} />
        ))}
      </div>
    </div>
  );
};

export default EventSlider;
