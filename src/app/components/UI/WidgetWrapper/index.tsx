import { FC, ReactNode } from 'react'
import styles from './widget.module.scss';

interface IProps {
    children: ReactNode,
    title: string,
    img: string,
}

const WidgetWrapper:FC<IProps> = ({children, title, img}) => {
  return (
    <div className={styles.widget}>
        <div className={styles.header}>
            {/* <Image /> */}
            <img src={img} alt="" />
            <p>{title}</p>
        </div>
        <div className={styles.body}>
            {children}
        </div>
    </div>
  )
}

export default WidgetWrapper