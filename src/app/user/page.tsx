import { NextPage } from "next";
import styles from "./user.module.scss";
import SidebarLayout from "@/layout/SidebarLayout";
import UserDataFrom from "@/modules/Forms/UserDataFrom";

const UserPage: NextPage = async () => {
  return (
    <div style={{ padding: "30px 30px 30px 60px" }}>
      <UserDataFrom />
    </div>
  );
};

export default UserPage;
