"use client";

import { FC } from "react";
import { countries } from "@/assets/data/countries";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import ImageFile from "@/components/UI/Form/ImageFile";
import InputDate from "@/components/UI/Form/InputDate";
import InputSelect from "@/components/UI/Form/InputSelect";
import InputText from "@/components/UI/Form/InputText";

import styles from "./form.module.scss";

type Inputs = {
  name: string;
  lastName: string;
  nickname: string;
};

const UserDataFrom: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("sad");
    console.log(data);
  };

  return (
    <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <div className={styles.file}>
            <ImageFile />
          </div>
          <div className={styles.item}>
            <p>Имя</p>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  defaultValue="Алексей"
                />
              )}
            />
          </div>

          <div className={styles.item}>
            <p>Фамилия</p>
            <Controller
              control={control}
              name="lastName"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  onChange={onChange}
                  onBlur={onBlur}
                  defaultValue="Спортов"
                  value={value}
                />
              )}
            />
          </div>
          <div className={styles.item}>
            <p>Никнейм</p>
            <Controller
              control={control}
              name="nickname"
              render={({ field: { onChange, onBlur, value } }) => (
                <InputText
                  onChange={onChange}
                  onBlur={onBlur}
                  defaultValue="Alex45"
                  value={value}
                />
              )}
            />
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
