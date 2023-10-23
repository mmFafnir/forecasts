import { CSSProperties, FC } from "react";
import styles from "./loader.module.scss";

interface IProps {
  style?: CSSProperties;
}

const Loader: FC<IProps> = ({ style = {} }) => {
  return (
    <div className={styles.body} style={{ ...style }}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;
