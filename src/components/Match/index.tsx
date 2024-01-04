"use client";

import React, { FC, memo, useState } from "react";
import styles from "./match.module.scss";
import StarIcon from "../UI/Icons/StarIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TGameFootball } from "@/types/sports/football";
import { getImageSrc } from "@/utils/getImageSrc";

interface IProps {
  match: TGameFootball;
}

const Match: FC<IProps> = ({ match }) => {
  const pathname = usePathname();
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  console.log(match);
  return (
    <div className={styles.match}>
      <Link href={match.url}></Link>
      <div className={styles.left}>
        <button
          className={`${styles.icon} ${isFavorite ? styles.active : ""}`}
          onClick={() => setIsFavorite((prev) => !prev)}
        >
          <StarIcon />
        </button>
        <div className={styles.desc}>
          <div className={styles.date}>
            <p>{match.real_date}</p>
            <p>{match.real_time}</p>
          </div>
          <div className={styles.team}>
            <p>
              <Image
                src={getImageSrc(match.home_team.team_id + ".png")}
                alt={match.home_team.team_name}
                width={20}
                height={15}
              />
              <span>{match.home_team.team_name}</span>
            </p>
            <p>
              <Image
                src={getImageSrc(match.away_team.team_id + ".png")}
                alt="Команда"
                width={20}
                height={15}
              />
              <span>{match.away_team.team_name}</span>
            </p>
          </div>
        </div>
      </div>
      {match.best_bet_card.length > 0 && (
        <div className={styles.right}>
          <p className={styles.bestBet}>Лучшая ставка:</p>
          <div className={styles.bet}>
            <p className={styles.winTeam}>{match.best_bet_card[0].bet}</p>
            <p className={styles.rate}>{match.best_bet_card[0].odds}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Match);
