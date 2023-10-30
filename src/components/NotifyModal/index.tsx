"use client";

import { FC, ReactNode, useEffect } from "react";

import styles from "./notifyModal.module.scss";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import {
  ModalEnum,
  closeModal,
  openModal,
} from "@/GlobalRedux/Slices/modalSlice";
import { getScrollBarWidth } from "@/utils/getScrollBarWidth";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import XIcon from "../UI/Icons/XIcon";
import TrashIcon from "../UI/Icons/TrashIcon";

interface IProps {
  children: ReactNode;
  title: string;
  name: ModalEnum;
}

const NotifyModal: FC<IProps> = ({ name, children, title }) => {
  const { activeModal } = useTypeSelector((state) => state.modal);

  const dispatch = useTypeDispatch();

  const onClose = () => dispatch(closeModal());
  const onCloseMenu = () => dispatch(openModal(ModalEnum.BURGER_MENU));

  useEffect(() => {
    if (activeModal !== null) {
      document.body.classList.add("lock");
      document.body.style.paddingRight = getScrollBarWidth() + "px";
    } else {
      document.body.classList.remove("lock");
      document.body.style.paddingRight = 0 + "px";
    }
  }, [activeModal]);

  return (
    <div
      className={`${styles.modal} ${name === activeModal ? styles.open : ""}`}
    >
      <div onClick={onClose} className={styles.bg}></div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <button className={styles.back} onClick={onCloseMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 12H5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 19L5 12L12 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <p>{title}</p>
          {activeModal === ModalEnum.NOTIFICATION ? (
            <button onClick={onClose}>
              <TrashIcon />
            </button>
          ) : (
            <button onClick={onClose}>
              <XIcon />
            </button>
          )}
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default NotifyModal;
