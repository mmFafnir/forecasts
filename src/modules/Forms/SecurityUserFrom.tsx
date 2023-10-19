"use client";

import { FC } from "react";
import InputText from "@/components/UI/Form/InputText";
import styles from "./form.module.scss";
import InputPassword from "@/components/UI/Form/InputPassword";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const SecurityUserFrom: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log("sad");
    console.log(data);
  };

  return (
    <form className={styles.body} onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <h2>Сменить пароль</h2>
          <div className={styles.item}>
            <p>Введите старый пароль</p>
            <InputPassword name="password" defaultValue="12312y3712y37" />
          </div>

          <div className={styles.item}>
            <p>Введите новый пароль</p>
            <InputPassword name="password" defaultValue="12312y3712y37" />
          </div>

          <div className={styles.item}>
            <p>Повторите пароль</p>
            <InputPassword name="password" defaultValue="12312y3712y37" />
          </div>
        </div>

        <div className={styles.list}>
          <h2>Сменить адрес электронной почты</h2>
          <div className={styles.item}>
            <p>Введите старый пароль</p>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  size="big"
                  defaultValue="example@gmail.com"
                />
              )}
            />
          </div>

          <div className={styles.item}>
            <p>Повторите новый адрес эл.почты</p>
            <Controller
              control={control}
              name="email-new"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  size="big"
                  defaultValue="example@gmail.com"
                />
              )}
            />
          </div>

          <div className={styles.item}>
            <p>Введите код</p>
            <InputPassword name="password" defaultValue="1234" />
          </div>
        </div>
        <button type="submit" className="btn p-20 btn--pur">
          Сохранить изменения
        </button>
      </div>
    </form>
  );
};

export default SecurityUserFrom;
