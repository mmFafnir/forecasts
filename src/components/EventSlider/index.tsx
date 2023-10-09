"use client"
import { FC } from 'react';
import styles from './eventSlider.module.scss';
import Image from 'next/image';
import TimeIcon from '../UI/Icons/TimeIcon';


import Link from 'next/link';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const array = [1,2,3,4,5,6,7,8,9,10 ]

const EventSlider:FC = () => {

    const { light } = useTypeSelector(state => state.themeLight);    

    return (
        <div className={`${styles.body} ${light ? styles.themeLight : ''}`}>
            <h4>Похожие события:</h4>
            <div className={`${styles.wrapper} container`}>
                
                {
                    array.map((slider, index) => (
                        <Link href={'/football/match'} key={index}  className={styles.item}>
                            <h3>Европа: Лига чемпионов - групповой этап</h3>
                            <div className={styles.date}>    
                                <p>20 сентября 2023</p>
                                <p>
                                    <span>19:45</span>
                                    <span>UTC+3</span>
                                </p>
                                <p className={styles.time}>
                                    <TimeIcon />
                                    <span>Осталось: 5 часов</span>
                                </p>
                            </div>
                            <div className={styles.teams}>
                                <div className={styles.team}>
                                    <Image 
                                        src={'/img/teams/1.png'}
                                        alt='Манчестер Юнайтед (Manchester United)'
                                        width={104}
                                        height={75}
                                    />
                                    <p>
                                        <span>Манчестер Юнайтед</span>
                                        <span>(Manchester United)</span>
                                    </p>
                                </div>
                                <div className={styles.team}>
                                    <Image 
                                        src={'/img/teams/2.png'}
                                        alt='Копенгаген (København)'
                                        width={104}
                                        height={75}
                                    />
                                    <p>
                                        <span>Манчестер Юнайтед</span>
                                        <span>(Manchester United)</span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default EventSlider;