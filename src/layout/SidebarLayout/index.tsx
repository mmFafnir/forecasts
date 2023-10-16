import { CSSProperties, FC, ReactNode } from "react";
import styles from "./sidebars.module.scss";
import Sidebar from "@/components/Sidebar";
import Bookmakers from "@/components/Widgets/Bookmakers";
import Statistics from "@/components/Widgets/Statistics";
import Leagues from "@/components/Widgets/Leagues";
import Countries from "@/components/Widgets/Countries";

interface IProps {
  children: ReactNode;
  styleAside?: CSSProperties;
}

const SidebarLayout: FC<IProps> = ({ children, styleAside }) => {
  return (
    <div className={`${styles.sidebars} container`}>
      <div className={styles.aside} style={styleAside}>
        <Sidebar widgets={[<Leagues key={1} />, <Countries key={2} />]} />
      </div>
      <div className="page-content">{children}</div>
      <div className={styles.aside} style={styleAside}>
        <Sidebar widgets={[<Statistics key={4} />, <Bookmakers key={3} />]} />
      </div>
      <div className={styles.tableAside}>
        <Sidebar
          slider={true}
          widgets={[
            <Leagues key={1} />,
            <Countries key={2} />,
            <Statistics key={4} />,
            <Bookmakers key={3} />,
          ]}
        />
      </div>
    </div>
  );
};

export default SidebarLayout;
