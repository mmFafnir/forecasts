"use client";

import { FC } from "react";
import styles from "./loginModal.module.scss";
import Image from "next/image";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import {
  ModalEnum,
  closeModal,
  openModal,
} from "@/GlobalRedux/Slices/modalSlice";
import { useTypeSelector } from "@/hooks/useTypeSelector";

const LoginModal: FC = () => {
  const { light } = useTypeSelector((state) => state.themeLight);
  const dispatch = useTypeDispatch();

  const onClose = () => dispatch(closeModal());
  const onOpenRegister = () => dispatch(openModal(ModalEnum.REGISTER));

  return (
    <div className={`${styles.form} ${light ? styles.themeLight : ""}`}>
      <div className={styles.header}>
        <h3>Регистрация</h3>
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
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
      <div className={styles.body}>
        <div className={styles.item}>
          <Image
            src={"/img/login/google.svg"}
            width={40}
            height={40}
            alt="google"
          />
          <span>Продолжить с Google </span>
        </div>
        <div className={styles.item}>
          <Image
            src={"/img/login/facebook.svg"}
            width={40}
            height={40}
            alt="facebook"
          />
          <span>Продолжить с Google </span>
        </div>
        <div className={styles.item}>
          <Image
            src={"/img/login/apple.svg"}
            width={40}
            height={40}
            alt="apple"
          />
          <span>Продолжить с Google </span>
        </div>
        <button onClick={onOpenRegister} className={styles.item}>
          <Image
            src={"/img/login/mail.svg"}
            width={40}
            height={40}
            alt="mail"
          />
          <span>Продолжить с Google </span>
        </button>
      </div>
      <p>
        Нажимая на любую кнопку “продолжить”, вы соглашаетесь с условиями и
        признаете нашу политику конфиданциальности на нашем сайте
      </p>
    </div>
  );
};

export default LoginModal;
