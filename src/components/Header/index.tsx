"use client";

import { FC } from "react";
import { ModalEnum } from "@/GlobalRedux/Slices/modalSlice";
import LoginModal from "../Modals/LoginModal";
import HeaderBottom from "./components/HeaderBottom";
import HeaderTop from "./components/HeaderTop";
import Modal from "../Modals";

import styles from "./header.module.scss";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import RegisterModal from "../Modals/LoginModal/RegisterModal";
import RestoreModal from "../Modals/LoginModal/RestoreModal";

const Header: FC = () => {
  const { light } = useTypeSelector((state) => state.themeLight);

  return (
    <>
      <header className={`${styles.header} ${light ? styles.lightTheme : ""}`}>
        <div className={`${styles.wrapper} container`}>
          <HeaderTop />
          <HeaderBottom />
        </div>
      </header>
      <Modal name={ModalEnum.LOGIN}>
        <LoginModal />
      </Modal>
      <Modal name={ModalEnum.REGISTER}>
        <RegisterModal />
      </Modal>
      <Modal name={ModalEnum.RESTORE}>
        <RestoreModal />
      </Modal>
    </>
  );
};

export default Header;
