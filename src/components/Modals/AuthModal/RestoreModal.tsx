"use client";

import { FC } from "react";
import styles from "./authModal.module.scss";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import {
  ModalEnum,
  closeModal,
  openModal,
} from "@/GlobalRedux/Slices/modalSlice";
import { useTypeSelector } from "@/hooks/useTypeSelector";
import InputText from "@/components/UI/Form/InputText";
import CaptchaModule from "@/modules/CaptchaModule";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const RestoreModal: FC = () => {
  const { light } = useTypeSelector((state) => state.themeLight);
  const dispatch = useTypeDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  const onClose = () => dispatch(closeModal());
  const onClickBack = () => dispatch(openModal(ModalEnum.REGISTER));
  const onModalLogin = () => dispatch(openModal(ModalEnum.LOGIN));

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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.body}>
        <h3>Восстановить пароль</h3>

        <div className={styles.input}>
          <p>E-mail</p>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                size="big"
                placeholder="example@gmail.com"
              />
            )}
          />
        </div>

        <div className={styles.captcha}>
          <CaptchaModule />
        </div>

        <div className={styles.input}>
          <p>Введите код с картинки</p>
          <Controller
            control={control}
            name="code"
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                size="big"
                defaultValue="R6CApyya"
              />
            )}
          />
        </div>
        <button className="btn btn--pur">Восстановить пароль</button>
      </form>
      <p className={styles.politicText}>
        Нажимая на любую кнопку “продолжить”, вы соглашаетесь с условиями и
        признаете нашу политику конфиданциальности на нашем сайте
      </p>
      <div className={styles.footer}>
        <span>или</span>
        <p>
          <span>У вас есть аккаунт?</span>
          <button onClick={onModalLogin} className="show-more">
            Войти
          </button>
        </p>
      </div>
    </div>
  );
};

export default RestoreModal;
