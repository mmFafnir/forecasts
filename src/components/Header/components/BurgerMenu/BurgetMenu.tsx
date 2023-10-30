"use client";

import { FC } from "react";
import styles from "./burgerMenu.module.scss";
import Logo from "@/components/UI/Logo";
import SettingIcon from "@/components/UI/Icons/SettingIcon";
import PersonIcon from "@/components/UI/Icons/PersonIcon";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import {
  ModalEnum,
  closeModal,
  openModal,
} from "@/GlobalRedux/Slices/modalSlice";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import PresentIcon from "@/components/UI/Icons/PresentIcon";
import BellIcon from "@/components/UI/Icons/Notify/BellIcon";

const BurgerMenu: FC = () => {
  const { activeModal } = useTypeSelector((state) => state.modal);
  const dispatch = useTypeDispatch();

  const onClose = () => dispatch(closeModal());
  const openSettings = () => dispatch(openModal(ModalEnum.SETTINGS));
  const openLogin = () => dispatch(openModal(ModalEnum.LOGIN));
  const onOpenPresent = () => dispatch(openModal(ModalEnum.PRESENT));
  const onOpenNotify = () => dispatch(openModal(ModalEnum.NOTIFICATION));

  return (
    <div
      className={`${styles.body} ${
        activeModal == ModalEnum.BURGER_MENU ? styles.active : ""
      }`}
    >
      <div
        onClick={onClose}
        className={`blur-bg ${
          activeModal === ModalEnum.BURGER_MENU ? "active" : ""
        }`}
      ></div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <button onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className={styles.list}>
          <button className={styles.item} onClick={openSettings}>
            <SettingIcon />
            <span>Настройки</span>
          </button>
          <button className={styles.item} onClick={onOpenPresent}>
            <PresentIcon />
            <span>Бонусы</span>
          </button>
          <button
            className={`${styles.item} ${styles.notify}`}
            onClick={onOpenNotify}
          >
            <BellIcon />
            <span>Уведомления</span>
          </button>
          <button className={styles.item} onClick={openLogin}>
            <PersonIcon />
            <span>Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
