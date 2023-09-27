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
          {
            widgets.map(widget => (
              widget
            ))
          }
          {/* <Leagues />
          <Countries /> */}
        </div>      
    </div>
  )
}

export default Sidebar 