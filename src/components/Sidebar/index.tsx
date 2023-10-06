"use client"
import { FC, ReactNode } from 'react'
import styles from './sidebar.module.scss';

interface IProps {
  widgets: ReactNode[],
  slider?: boolean
}

const Sidebar:FC<IProps> = ({widgets, slider=false}) => {

  return (
    <div className={`${styles.sidebar} ${styles.slider}`}>
        <div className={styles.wrapper}>
          <div className={styles.sticky}>
            {
              widgets.map(widget => (
                widget
              ))
            }
          </div>
        </div>      
    </div>
  )
}

export default Sidebar 