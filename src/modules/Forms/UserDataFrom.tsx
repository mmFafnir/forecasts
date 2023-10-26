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
  surname: string;
  nickname: string;
  gender: string;
  country: string;
  date: Date;
};

const UserDataFrom: FC = () => {
  const { handleSubmit, control } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.body} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrapper}>
        <div className={styles.list}>
          <div className={styles.file}>
            <ImageFile />
          </div>

          {/* name */}
          <div className={styles.item}>
            <p>Имя</p>
            <Controller
              control={control}
              name="name"
              defaultValue="Алексей"
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

          {/* surname */}
          <div className={styles.item}>
            <p>Фамилия</p>
            <Controller
              control={control}
              name="surname"
              defaultValue="Спортов"
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

          {/* nickname */}
          <div className={styles.item}>
            <p>Никнейм</p>
            <Controller
              control={control}
              name="nickname"
              defaultValue="Alex45"
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

          {/* gender */}
          <div className={styles.item}>
            <p>Пол</p>
            <Controller
              name="gender"
              control={control}
              defaultValue="M"
              render={({ field: { onChange } }) => (
                <InputSelect
                  onChange={(value) => onChange(value)}
                  items={[
                    { value: "M", text: "Мужской" },
                    { value: "F", text: "Женсикий" },
                  ]}
                />
              )}
            />
          </div>

          {/* date */}
          <div className={styles.item}>
            <p>Дата рождения</p>
            <Controller
              control={control}
              name="date"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <InputDate
                  onChange={(date) => onChange(date)}
                  value={value}
                  error={error?.message}
                />
              )}
            />
          </div>

          {/* country */}
          <div className={styles.item}>
            <p>Страна </p>
            <Controller
              name="country"
              control={control}
              defaultValue={countries[0].value}
              render={({ field: { onChange } }) => (
                <InputSelect
                  onChange={(value) => onChange(value)}
                  items={countries}
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

export default UserDataFrom;
