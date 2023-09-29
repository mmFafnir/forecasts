import { NextPage } from 'next'
import React from 'react'
import { links } from '../../data/links'
import FilterTabs from '@/components/FilterTabs'
import List from '@/components/List'
import styles from '../scss/page.module.scss'

interface IProps {
    params: {
        slug: string
    }
}

export const generateStaticParams = async () => {
    return links.map(link => {
        slug: link.href.replace('/', '');
    })
}

const SportPage:NextPage<IProps> = ({params}) => {
  const currentLink = links.find(link => link.href == `/${params.slug}`)
    
  return (
    <div className={styles.main}>
      <h1>{currentLink?.name} АВСТРАЛИЯ И ОКЕАНИЯ OFC Championship U16 Women</h1>
      <FilterTabs />
      <List />

      <p className='desc-text'>
        Определите будущее и выигрывайте с нашими прогнозами матчей! Наши аналитики исследуют статистику и тренды, чтобы предсказать результаты спортивных событий. Поднимите ставки на новый уровень с нашими экспертами!. Определите будущее и выигрывайте с нашими прогнозами матчей! Наши аналитики исследуют статистику и тренды, чтобы предсказать результаты спортивных событий. Поднимите ставки на новый уровень с нашими экспертами!
      </p>
    </div>
  )
}

export default SportPage