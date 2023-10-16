"use client";

import ImageFile from "@/components/UI/Form/ImageFile";
import InputText from "@/components/UI/Form/InputText";
import Select from "@/components/UI/Select";
import Image from "next/image";
import { FC, FormEvent } from "react";

const UserDataFrom: FC = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("sad");
  };

  return (
    <form onSubmit={onSubmit}>
      <ImageFile />

      <InputText title="Имя" type="text" defaultValue="Алексей" name="name" />
      <InputText
        title="Фамилия"
        type="text"
        defaultValue="Спортов"
        name="name"
      />
      <InputText
        title="Никнейм"
        type="text"
        defaultValue="Alex45"
        name="name"
      />

      <Select items={["Мужской", "Женсикй"]} />

      <button type="submit" className="btn p-20 btn--pur">
        Сохранить изменения
      </button>
    </form>
  );
};

export default UserDataFrom;
