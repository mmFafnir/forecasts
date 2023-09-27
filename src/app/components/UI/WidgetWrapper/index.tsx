import { FC, ReactNode } from 'react'
import styles from './widget.module.scss';
import Image from 'next/image';

interface IProps {
    children: ReactNode,
    title: string,
    img: string,
}

const WidgetWrapper:FC<IProps> = ({children, title, img}) => {
  return (
    <div className={styles.widget}>
        <div className={styles.header}>
            {/* <Image /> */}\
            <Image 
              src={img} 
              alt={title} 
              width={20}
              height={20}
            />
            <p>{title}</p>
        </div>
        <div className={styles.body}>
            {children}
        </div>
    </div>
  )
}

export default WidgetWrapper