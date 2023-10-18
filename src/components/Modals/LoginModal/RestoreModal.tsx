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
import InputText from "@/components/UI/Form/InputText";
import InputPassword from "@/components/UI/Form/InputPassword";
import CaptchaModule from "@/modules/CaptchaModule";

const RestoreModal: FC = () => {
  const { light } = useTypeSelector((state) => state.themeLight);
  const dispatch = useTypeDispatch();

  const onClose = () => dispatch(closeModal());
  const onClickBack = () => dispatch(openModal(ModalEnum.REGISTER));

  return (
    <div className={`${styles.form} ${light ? styles.themeLight : ""}`}>
      <div className={styles.header}>
        <button onClick={onClickBack}>
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
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
        <h3>Восстановить пароль</h3>

        <div className={styles.input}>
          <p>E-mail</p>
          <InputText size="big" name="email" placeholder="example@gmail.com" />
        </div>

        <div className={styles.captcha}>
          <CaptchaModule />
        </div>

        <div className={styles.input}>
          <p>Введите код с картинки</p>
          <InputText size="big" name="code" placeholder="R6CApyya" />
        </div>
      </div>
      <button className="btn btn--pur">Восстановить пароль</button>
      <p className={styles.politicText}>
        Нажимая на любую кнопку “продолжить”, вы соглашаетесь с условиями и
        признаете нашу политику конфиданциальности на нашем сайте
      </p>
      <div className={styles.footer}>
        <span>или</span>
        <p>
          <span>У вас есть аккаунт?</span>
          <button className="show-more">Войти</button>
        </p>
      </div>
    </div>
  );
};

export default RestoreModal;
