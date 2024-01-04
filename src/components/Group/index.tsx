"use client";

import React, { FC, useState } from "react";
import styles from "./group.module.scss";
import StarIcon from "../UI/Icons/StarIcon";
import Image from "next/image";
import Match from "../Match";
import { TLeaguesFootball } from "@/types/sports/football";
import { getImageSrc } from "@/utils/getImageSrc";

interface IProps {
  item: TLeaguesFootball;
}

const Group: FC<IProps> = ({ item }) => {
  const [isChecked, setIsChecked] = useState<boolean>(
    item.favorit === "0" ? false : true
  );
  return (
    <div className={styles.group}>
      <div className={styles.header}>
        <div>
          <button
            className={`${styles.icon} ${isChecked ? styles.active : ""}`}
            onClick={() => setIsChecked((prev) => !prev)}
          >
            <StarIcon />
          </button>
          <div className={styles.country}>
            <Image
              src={getImageSrc(item.league_cc + ".svg")}
              alt={item.league_name}
              width={20}
              height={15}
            />
            <p>{item.league_name}</p>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {item.games.map((game) => (
          <Match key={game.id} match={game} />
        ))}
      </div>
    </div>
  );
};

export default Group;
