import { NextPage } from "next";
import styles from "./user.module.scss";
import SidebarLayout from "@/layout/SidebarLayout";
import UserDataFrom from "@/modules/Forms/UserDataFrom";

const UserPage: NextPage = async () => {
  return (
    <div className={styles.main}>
      <div>
        <UserDataFrom />
      </div>
    </div>
  );
};

export default UserPage;
