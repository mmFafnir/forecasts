import { FC } from "react";
import styles from "./notifications.module.scss";
import { Scrollbar } from "react-scrollbars-custom";
import CommentIcon from "@/components/UI/Icons/Notify/CommentIcon";
import LiveIcon from "@/components/UI/Icons/Notify/LiveIcon";
import BellIcon from "@/components/UI/Icons/Notify/BellIcon";
import PlusIcon from "@/components/UI/Icons/PlusIcon";
import XIcon from "@/components/UI/Icons/XIcon";

enum EnumNotify {
  START_MATCH = "start_match",
  COMMENT = "comment",
  LIVE = "live",
}

const date = [
  {
    text: "Начался матч  “АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women",
    type: "start_match",
  },
  {
    text: "Пользователь @Abecas прокомментировал ваш прогноз",
    type: "comment",
  },
  {
    text: "Началась прямая трансляция  “АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women”",
    type: "live",
  },
  {
    text: "Начался матч  “АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women",
    type: "start_match",
  },
  {
    text: "Пользователь @Abecas прокомментировал ваш прогноз",
    type: "comment",
  },
  {
    text: "Началась прямая трансляция  “АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women”",
    type: "live",
  },
];

const getCurrentSVG = (type: string) => {
  if (EnumNotify.COMMENT === type) return <CommentIcon />;
  if (EnumNotify.LIVE === type) return <LiveIcon />;
  if (EnumNotify.START_MATCH === type) return <BellIcon />;
  return <></>;
};

const Notifications: FC = () => {
  return (
    <div className={styles.body}>
      <Scrollbar className={`${styles.scrollbar} track-right`}>
        {date.map((item, index) => (
          <div key={index} className={styles.item}>
            {getCurrentSVG(item.type)}
            <p className={styles.text}>{item.text}</p>
            <button>
              <XIcon />
            </button>
          </div>
        ))}
      </Scrollbar>
    </div>
  );
};

export default Notifications;
