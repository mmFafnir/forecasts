"use client";
import { ModalEnum, openModal } from "@/GlobalRedux/Slices/modalSlice";
import PersonIcon from "@/components/UI/Icons/PersonIcon";
import SettingIcon from "@/components/UI/Icons/SettingIcon";
import Logo from "@/components/UI/Logo";
import Search from "@/components/UI/Search";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import { FC, useState } from "react";
import styles from "../header.module.scss";
import Settings from "@/components/Settings";
import BurgerIcon from "@/components/UI/Icons/BurgerIcon";
import BurgerMenu from "./BurgerMenu/BurgetMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PresentIcon from "@/components/UI/Icons/PresentIcon";
import NotifyModal from "@/components/NotifyModal";
import Present from "@/components/NotifyModal/Present";
import Notifications from "@/components/NotifyModal/Notifications";
import Image from "next/image";

const HeaderTop: FC = () => {
  const pathname = usePathname();
  const dispatch = useTypeDispatch();

  const onOpenModalAuth = () => dispatch(openModal(ModalEnum.AUTH));
  const onOpenBurgerMenu = () => dispatch(openModal(ModalEnum.BURGER_MENU));
  const onOpenSettings = () => dispatch(openModal(ModalEnum.SETTINGS));
  const onOpenPresent = () => dispatch(openModal(ModalEnum.PRESENT));
  const onOpenNotification = () => dispatch(openModal(ModalEnum.NOTIFICATION));

  return (
    <>
      <div className={styles.top}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.tabs}>
          <Link
            href={"/"}
            className={!pathname.includes("AI") ? styles.tabActive : ""}
          >
            ПРОГНОЗЫ
          </Link>
          <Link
            href={"/AI"}
            className={pathname.includes("AI") ? styles.tabActive : ""}
          >
            СТАВИМ С ИИ
          </Link>
        </div>
        <div className={styles.search}>{/* <Search/> */}</div>
        <div className={styles.icons}>
          {/* <button onClick={onOpenModalAuth}>
            <PersonIcon />
          </button> */}
          <div className={styles.person}>
            <span onClick={onOpenNotification} className="notify-action">
              3
            </span>
            <Link href={"/user"}>
              <Image height={28} width={28} src={"/img/person.png"} alt="ФИО" />
            </Link>
          </div>

          <button onClick={onOpenPresent}>
            <span className="notify-action">5</span>
            <PresentIcon />
          </button>
          <button onClick={onOpenSettings}>
            <SettingIcon />
          </button>
        </div>
        <button onClick={onOpenBurgerMenu} className={styles.mobMenuBtn}>
          <BurgerIcon />
        </button>
      </div>
      <Settings />
      <NotifyModal name={ModalEnum.PRESENT} title="Бонус">
        <Present />
      </NotifyModal>
      <NotifyModal name={ModalEnum.NOTIFICATION} title="Уведомления">
        <Notifications />
      </NotifyModal>
      <BurgerMenu />
    </>
  );
};

export default HeaderTop;
