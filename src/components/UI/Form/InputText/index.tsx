import { FC } from "react";
import { Control, RefCallBack } from "react-hook-form";
import styles from "./inputText.module.scss";
import PenIcon from "../../Icons/Form/PenIcon";

interface IProps {
  defaultValue?: string;
  value: string;
  placeholder?: string;
  onBlur: () => void;
  onChange: () => void;
  size?: "big" | "middle" | "small";
}

const InputText: FC<IProps> = ({
  onBlur,
  onChange,
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
          defaultValue={defaultValue}
          onBlur={onBlur}
          onChange={onChange}
        />
        <button type="button">
          <PenIcon />
        </button>
      </label>
    </div>
  );
};

export default InputText;
