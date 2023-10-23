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
  error?: string;
}

const InputText: FC<IProps> = ({
  onBlur,
  onChange,
  defaultValue = "",
  placeholder = "",
  size = "middle",
  error,
}) => {
  return (
    <div
      className={`${styles.body} ${error ? styles.error : ""} ${styles[size]}`}
    >
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

      {error && <span className={`input-error ${size}`}>{error}</span>}
    </div>
  );
};

export default InputText;
