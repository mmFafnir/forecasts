import { FC, useState } from "react";
import styles from "./inputPassword.module.scss";
import CloseEyes from "../../Icons/Form/CloseEyes";

interface IProps {
  name: string;
  defaultValue?: string;
  placeholder?: string;
  size?: "big" | "middle" | "small";
}

const InputPassword: FC<IProps> = ({
  name,
  defaultValue = "",
  placeholder = "",
  size = "middle",
}) => {
  const [type, setType] = useState<"password" | "text">("password");

  const openViewPassword = () => setType("text");
  const closeViewPassword = () => setType("password");

  return (
    <div className={`${styles.body} ${styles[size]}`}>
      <label className={styles.label}>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
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
    </div>
  );
};

export default InputPassword;
