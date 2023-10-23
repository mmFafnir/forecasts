"use client";

import { FC, useRef } from "react";
import InputText from "@/components/UI/Form/InputText";
import styles from "./form.module.scss";
import InputPassword from "@/components/UI/Form/InputPassword";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import textValidationForm from "@/assets/data/textValidationForm";

type TInputs = {
  password_old: string;
  password: string;
  password_confirmation: string;

  email_old: string;
  email: string;
  code: string;
};

const SecurityUserFrom: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<TInputs>();

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    console.log("sad");
    console.log(data);
  };

  return (
    <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <h2>Сменить пароль</h2>

          {/* password old */}
          <div className={styles.item}>
            <p>Введите старый пароль</p>
            <Controller
              control={control}
              rules={{
                required: textValidationForm.empty,
                minLength: {
                  value: 6,
                  message: textValidationForm.minLengthPassword,
                },
              }}
              name="password_old"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputPassword
                  error={error?.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>

          {/* password */}
          <div className={styles.item}>
            <p>Введите новый пароль</p>
            <Controller
              control={control}
              rules={{
                required: textValidationForm.empty,
                minLength: {
                  value: 6,
                  message: textValidationForm.minLengthPassword,
                },
              }}
              name="password"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputPassword
                  error={error?.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>

          {/* password confirmation */}
          <div className={styles.item}>
            <p>Повторите пароль</p>
            <Controller
              control={control}
              rules={{
                required: textValidationForm.empty,
                minLength: {
                  value: 6,
                  message: textValidationForm.minLengthPassword,
                },
                validate: (value) =>
                  value === password.current || textValidationForm.notMatchPass,
              }}
              name="password_confirmation"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputPassword
                  error={error?.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </div>
        </div>

        <div className={styles.list}>
          <h2>Сменить адрес электронной почты</h2>

          {/* old email */}
          <div className={styles.item}>
            <p>Введите старый пароль</p>
            <Controller
              control={control}
              name="email_old"
              rules={{
                required: textValidationForm.empty,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </div>

          {/* email */}
          <div className={styles.item}>
            <p>Повторите новый адрес эл.почты</p>
            <Controller
              control={control}
              name="email"
              rules={{
                required: textValidationForm.empty,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText onChange={onChange} onBlur={onBlur} value={value} />
              )}
            />
          </div>

          {/* code */}
          <div className={styles.item}>
            <p>Введите код</p>

            <Controller
              control={control}
              rules={{
                required: textValidationForm.empty,
              }}
              name="code"
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <InputPassword
                  error={error?.message}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
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
