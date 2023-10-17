"use client";

import { FC, FormEvent } from "react";
import { countries } from "@/assets/data/countries";
import ImageFile from "@/components/UI/Form/ImageFile";
import InputDate from "@/components/UI/Form/InputDate";
import InputSelect from "@/components/UI/Form/InputSelect";
import InputText from "@/components/UI/Form/InputText";
import styles from "./form.module.scss";

const UserDataFrom: FC = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.body} onSubmit={onSubmit}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <div className={styles.file}>
            <ImageFile />
          </div>
          <div className={styles.item}>
            <p>Имя</p>
            <InputText defaultValue="Алексей" name="name" />
          </div>

          <div className={styles.item}>
            <p>Фамилия</p>
            <InputText defaultValue="Спортов" name="name" />
          </div>
          <div className={styles.item}>
            <p>Никнейм</p>
            <InputText defaultValue="Alex45" name="name" />
          </div>

          <div className={styles.item}>
            <p>Пол</p>
            <InputSelect
              items={["Мужской", "Женсикий", "Оно", "5K MMR Чудовище"]}
            />
          </div>
          <div className={styles.item}>
            <p>Дата рождения</p>
            <InputDate />
          </div>

          <div className={styles.item}>
            <p>Страна </p>
            <InputSelect items={countries} />
          </div>
        </div>
        <button type="submit" className="btn p-20 btn--pur">
          Сохранить изменения
        </button>
      </div>
    </form>
  );
};

export default UserDataFrom;
