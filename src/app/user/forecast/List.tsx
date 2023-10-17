"use client";

import ForecastCard from "@/components/Cards/ForecastCard";
import { FC } from "react";
import { Scrollbar } from "react-scrollbars-custom";

const List: FC = () => {
  return (
    <Scrollbar>
      <ForecastCard version="user-forecast" />
    </Scrollbar>
  );
};

export default List;
