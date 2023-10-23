import { FC, useState } from "react";
import styles from "./inputPassword.module.scss";
import CloseEyes from "../../Icons/Form/CloseEyes";

interface IProps {
  value: string;
  defaultValue?: string;
  placeholder?: string;
  size?: "big" | "middle" | "small";
  onBlur: () => void;
  onChange: () => void;
  error?: string;
}

const InputPassword: FC<IProps> = ({
  defaultValue = "",
  placeholder = "",
  size = "middle",
  onBlur,
  onChange,
  error,
}) => {
  const [type, setType] = useState<"password" | "text">("password");

  const openViewPassword = () => setType("text");
  const closeViewPassword = () => setType("password");

  return (
    <div
      className={`${styles.body} ${error ? styles.error : ""} ${styles[size]}`}
    >
      <label className={styles.label}>
        <input
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onBlur={onBlur}
          onChange={onChange}
        />
        <button
          type="button"
          onMouseDown={openViewPassword}
          onMouseUp={closeViewPassword}
          onMouseLeave={closeViewPassword}
          onTouchStart={openViewPassword}
          onTouchEnd={closeViewPassword}
        >
          <CloseEyes />
        </button>
      </label>
      {error && <span className={`input-error ${size}`}>{error}</span>}
    </div>
  );
};

export default InputPassword;
