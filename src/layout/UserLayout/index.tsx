import { FC, ReactNode } from "react";
import styles from "./userLatout.module.scss";
import UserNavbar from "@/components/UserNavbar";

interface IProps {
  children: ReactNode;
}
const UserLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.aside}>
        <UserNavbar />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default UserLayout;
