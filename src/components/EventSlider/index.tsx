"use client"
import { FC, useEffect, useRef } from 'react';
import styles from './eventSlider.module.scss';
import Image from 'next/image';
import TimeIcon from '../UI/Icons/TimeIcon';
import { Animate } from '@/assets/scripts/animateSlider';

const array = [1,2,3,4,5,6,7,8,9,10 ]

const EventSlider:FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!sliderRef.current) return
        new Animate(sliderRef.current)
    }, [])

    return (
        <div className={styles.body}>
            <h4>Похожие события:</h4>
            <div ref={sliderRef} className={styles.slider}>
                {
                    array.map((slider, index) => (
                        <div key={index} className={styles.slide}>
                            <div className={styles.team}>
                                <Image 
                                    src={'/img/teams/1.png'}
                                    alt='Манчестер Юнайтед (Manchester United)'
                                    width={104}
                                    height={75}
                                />
                                <p>Манчестер Юнайтед (Manchester United)</p>
                            </div>
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
                            <div className={styles.team}>
                                <Image 
                                    src={'/img/teams/2.png'}
                                    alt='Копенгаген (København)'
                                    width={104}
                                    height={75}
                                />
                                <p>Манчестер Юнайтед (Manchester United)</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default EventSlider;