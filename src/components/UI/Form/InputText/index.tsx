import { FC } from "react";
import styles from "./inputText.module.scss";
import PenIcon from "../../Icons/Form/PenIcon";

interface IProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  size?: "big" | "middle" | "small";
}

const InputText: FC<IProps> = ({
  name,
  defaultValue = "",
  placeholder = "",
  size = "middle",
}) => {
  return (
    <div className={`${styles.body} ${styles[size]}`}>
      <label className={styles.label}>
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
        />
        <button type="button">
          <PenIcon />
        </button>
      </label>
    </div>
  );
};

export default InputText;
