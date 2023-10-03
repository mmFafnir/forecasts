import { NextPage } from 'next'
import React from 'react'
import FilterTabs from '@/components/FilterTabs'
import List from '@/components/List'
import SidebarLayout from '@/layout/SidebarLayout'
import { favoritesTabs } from '@/assets/data/tabs'
import styles from './favorites.module.scss'

const FavoritePage:NextPage = () => {
  return (
    <div>
        <h1>Избранное</h1>
        <SidebarLayout>
          <div className={styles.header}>
              <FilterTabs tabs={favoritesTabs}/>
              <div className={styles.total}>
                  <p>Всего: 23</p>
                  <p>Лучшие: 12</p>
              </div>
          </div>
          <List />
        </SidebarLayout>
      </div>
  )
}

export default FavoritePage