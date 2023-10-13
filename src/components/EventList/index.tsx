"use client";

import { FC } from "react";
import styles from "./eventList.module.scss";
import Select from "../UI/Select";
import EventCard from "../Cards/EventCard";
import Modal from "../Modals";
import EventModal from "../Modals/EventModal";
import { ModalEnum } from "@/GlobalRedux/Slices/modalSlice";
import { sort } from "@/assets/data/sort";

const EventList: FC = () => {
  return (
    <div className={styles.eventList}>
      <div className={styles.header}>
        <h2>Список событий</h2>
        <div className={styles.select}>
          <Select
            icon="/img/sort.svg"
            classes={["absolute", "purple"]}
            items={sort.map((item) => item.title)}
          />
        </div>
      </div>
      <div className={styles.body}>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
      <Modal name={ModalEnum.EVENT}>
        <EventModal />
      </Modal>
    </div>
  );
};

export default EventList;
