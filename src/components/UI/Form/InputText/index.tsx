import { FC } from "react";
import styles from "./styles.module.scss";
import PenIcon from "../../Icons/Form/PenIcon";

interface IProps {
  title: string;
  name: string;
  type: "text" | "password";
  defaultValue: string;
}

const InputText: FC<IProps> = ({ title, name, type, defaultValue }) => {
  return (
    <div className={styles.body}>
      <p>{title}</p>
      <label className={styles.label}>
        <input type={type} name={name} defaultValue={defaultValue} />
        <button>
          <PenIcon />
        </button>
      </label>
    </div>
  );
};

export default InputText;
