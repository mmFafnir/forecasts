"use client";

import { FC } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import {
  ModalEnum,
  closeModal,
  openModal,
} from "@/GlobalRedux/Slices/modalSlice";

import { useTypeSelector } from "@/hooks/useTypeSelector";

import InputText from "@/components/UI/Form/InputText";
import InputPassword from "@/components/UI/Form/InputPassword";
import styles from "./loginModal.module.scss";

const RegisterModal: FC = () => {
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
  const onOpenRestoreModal = () => dispatch(openModal(ModalEnum.RESTORE));

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
      <form onSubmit={handleSubmit(onSubmit)} className={styles.body}>
        <h3>Создать новый аккаунт</h3>
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

        <div className={styles.input}>
          <p>Пароль</p>
          <InputPassword size="big" name="password" />
        </div>

        <div className={styles.input}>
          <p>Повторите пароль</p>
          <InputPassword size="big" name="password" />
        </div>

        <button type="submit" className="btn btn--pur">
          Зарегистрироваться
        </button>
      </form>
      <p className={styles.politicText}>
        Нажимая на любую кнопку “продолжить”, вы соглашаетесь с условиями и
        признаете нашу политику конфиданциальности на нашем сайте
      </p>
      <div className={styles.footer}>
        <p>
          <button onClick={onOpenRestoreModal} className="show-more">
            Забыли пароль?
          </button>
        </p>
        <span>или</span>
        <p>
          <span>У вас есть аккаунт?</span>
          <button className="show-more">Войти</button>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;
