import SecurityUserFrom from "@/modules/Forms/SecurityUserFrom";
import { NextPage } from "next";
import styles from "../user.module.scss";

const SecurityPage: NextPage = async () => {
  return (
    <div className={styles.main}>
      <SecurityUserFrom />
    </div>
  );
};

export default SecurityPage;
