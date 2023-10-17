import { CSSProperties, FC, ReactNode } from "react";
import styles from "./sidebars.module.scss";
import Sidebar from "@/components/Sidebar";
import { widgetsDefault } from "./widgetsDefault";

interface IProps {
  children: ReactNode;
  styleAside?: CSSProperties;
  widgets?: {
    left: ReactNode[];
    right: ReactNode[];
  };
}

const SidebarLayout: FC<IProps> = ({
  children,
  styleAside,
  widgets = widgetsDefault,
}) => {
  return (
    <div className={`${styles.sidebars} container`}>
      <div className={styles.aside} style={styleAside}>
        <Sidebar widgets={widgets.left} />
      </div>
      <div className="page-content">{children}</div>
      <div className={styles.aside} style={styleAside}>
        <Sidebar widgets={widgets.right} />
      </div>
      <div className={styles.tableAside}>
        <Sidebar slider={true} widgets={[...widgets.left, ...widgets.right]} />
      </div>
    </div>
  );
};

export default SidebarLayout;
