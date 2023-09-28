import React, { FC, ReactNode } from 'react'
import styles from './sidebar.module.scss';
import Leagues from '../Widgets/Leagues';
import Countries from '../Widgets/Countries';


interface IProps {
  widgets: ReactNode[]
}

const Sidebar:FC<IProps> = ({widgets}) => {
  return (
    <div className={styles.sidebar}>
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