"use client";

import { FC } from "react";
import { ModalEnum } from "@/GlobalRedux/Slices/modalSlice";
import AuthModal from "../Modals/AuthModal";
import HeaderBottom from "./components/HeaderBottom";
import HeaderTop from "./components/HeaderTop";
import Modal from "../Modals";

import styles from "./header.module.scss";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import RegisterModal from "../Modals/AuthModal/RegisterModal";
import RestoreModal from "../Modals/AuthModal/RestoreModal";
import LoginModal from "../Modals/AuthModal/LoginModal";

const Header: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.wrapper} container`}>
          <HeaderTop />
          <HeaderBottom />
        </div>
      </header>
      <Modal name={ModalEnum.AUTH}>
        <AuthModal />
      </Modal>
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
