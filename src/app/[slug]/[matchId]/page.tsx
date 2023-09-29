
import { NextPage } from 'next'
import React from 'react'
import { links } from '../../../data/links'
import styles from './match.module.scss';
import BreadCrumbs from '@/components/UI/BreadСrumbs';
import Image from 'next/image';
import TextAnalysis from '@/components/TextAnalysis';
import EventList from '@/components/EventList';

interface IProps {
    params: {
        slug: string,
        matchId: string
    }
}

const MatchPage:NextPage<IProps> = ({params}) => {

  const namePrevLink = links.find(link => link.href === (params.slug == 'football' ? '/' : '/' + params.slug))!.name;
  const hrefPrevLink = params.slug === 'football' ? '/' : `/${params.slug}`;

  const bredCrumbs = [
    {
      name: namePrevLink,
      href: '/' + hrefPrevLink,
    },
    {
      name: 'Прогноз на матч: Галатасарай (Galatasaray) - Копенгаген (København)',
      href: `/${params.slug}/${params.matchId}`
    }
  ];
  

  return (
      <div className={styles.match}>
        <div className={styles.wrapper}>
          <h1>Прогноз на матч: Галатасарай (Galatasaray) - Копенгаген (København)</h1>
          <BreadCrumbs crumbs={bredCrumbs} />

          <div className={styles.body}>
            <div className={styles.content}>
              <div className={styles.flex}>
                <div className={styles.team}>
                    <Image
                      src={'/img/teams/1.png'}
                      alt={'Манчестер Юнайтед (Manchester United)'}
                      height={92}
                      width={100}
                    />
                    <h2>Манчестер Юнайтед (Manchester United)</h2>
                </div>
                <div className={styles.date}>
                  <p>20 сентября 2023</p>
                  <p>
                    <span>19:45</span>
                    <span>UTC+3</span>
                  </p>
                  <p className={styles.left}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z" stroke="#FFD644" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 5V10L13.3333 11.6667" stroke="#FFD644" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Осталось: 5 часов</span>
                  </p>
                </div>  
                <div className={styles.team}>
                    <Image
                      src={'/img/teams/2.png'}
                      alt={'Копенгаген (København)'}
                      height={92}
                      width={100}
                    />
                    <h2>Копенгаген (København)</h2>
                </div>
              </div>
              <button className='btn btn--pur btn--shadow'><span>Сделать ставку</span></button>
            </div>
            <div className={styles.text}>
              <TextAnalysis />
            </div>
            <EventList />

            <div className="desc-text desc-text--center">
              <p>
                Ищете точный бесплатный прогноз на футбольный матч Галатасарай (Galatasaray) - Копенгаген (København), который состоится 20 сентября 2023 года? На данной странице вы точно найдете самый актуальный бесплатный прогноз на футбольный матч Галатасарай (Galatasaray) - Копенгаген (København). Ставка на футбольный матч - это всегда риск, но с нашим бесплатным прогнозом от ИИ на матч Галатасарай (Galatasaray) и Копенгаген (København) ваши шансы на успех значительно увеличиваются. Бесплатный прогноз ставки на футбольный матч между командами Галатасарай (Galatasaray) и Копенгаген (København), который пройдет 20 сентября 2023 года. Футбол прогноз. Бесплатный прогноз на матчи .
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MatchPage