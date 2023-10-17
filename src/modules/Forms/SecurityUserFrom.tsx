"use client";

import { FC, FormEvent } from "react";
import { countries } from "@/assets/data/countries";
import ImageFile from "@/components/UI/Form/ImageFile";
import InputDate from "@/components/UI/Form/InputDate";
import InputSelect from "@/components/UI/Form/InputSelect";
import InputText from "@/components/UI/Form/InputText";
import styles from "./form.module.scss";
import InputPassword from "@/components/UI/Form/InputPassword";

const SecurityUserFrom: FC = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
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
            <InputText name="email" defaultValue="example@gmail.com" />
          </div>

          <div className={styles.item}>
            <p>Повторите новый адрес эл.почты</p>
            <InputText name="email" defaultValue="example@gmail.com" />
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
