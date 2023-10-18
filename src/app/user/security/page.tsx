import SecurityUserFrom from "@/modules/Forms/SecurityUserFrom";
import { NextPage } from "next";

const SecurityPage: NextPage = async () => {
  return (
    <div style={{ padding: "30px 30px 30px 60px" }}>
      <SecurityUserFrom />
    </div>
  );
};

export default SecurityPage;
