import {
  ModalEnum,
  closeModal,
  openModal,
} from "@/GlobalRedux/Slices/modalSlice";
import { useTypeDispatch } from "@/hooks/useTypeDispatch";
import { FC } from "react";
import styles from "./authModal.module.scss";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import textValidationForm from "@/assets/data/textValidationForm";
import InputText from "@/components/UI/Form/InputText";
import InputPassword from "@/components/UI/Form/InputPassword";

type TInputs = {
  email: string;
  password: string;
};

const LoginModal: FC = () => {
  const dispatch = useTypeDispatch();
  const { handleSubmit, control } = useForm<TInputs>();

  const onClose = () => dispatch(closeModal());
  const onOpenRegisterModal = () => dispatch(openModal(ModalEnum.REGISTER));
  const onOpenRestoreModal = () => dispatch(openModal(ModalEnum.RESTORE));

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.form}>
      <div className={styles.header}>
        <h3>Войти</h3>
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
        <h3>Войти в аккаунт</h3>

        {/* email */}
        <div className={styles.input}>
          <p>E-mail</p>
          <Controller
            control={control}
            rules={{
              required: textValidationForm.empty,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверное значение поля e-mail",
              },
            }}
            name="email"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <InputText
                error={error?.message}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                size="big"
              />
            )}
          />
        </div>

        {/* password */}
        <div className={styles.input}>
          <p>Пароль</p>
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
                size="big"
              />
            )}
          />
        </div>

        <button type="submit" className="btn btn--pur">
          Войти
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
          <span>У вас нет аккаунта?</span>
          <button onClick={onOpenRegisterModal} className="show-more">
            Зарегистрироваться
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
