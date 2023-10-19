import { NextPage } from "next";
import styles from "./user.module.scss";
import UserDataFrom from "@/modules/Forms/UserDataFrom";

const UserPage: NextPage = async () => {
  return (
    <div className={styles.main}>
      <UserDataFrom />
    </div>
  );
};

export default UserPage;
