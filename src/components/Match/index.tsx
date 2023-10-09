"use client";

import React, { memo, useState } from 'react';
import styles from './match.module.scss';
import StarIcon from '../UI/Icons/StarIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTypeSelector } from '@/hooks/useTypeSelector';


const Match = () => {
    const id = 'match'
    const pathname = usePathname();
    
    const { light } = useTypeSelector(state => state.themeLight);

    const [isFavorite, setIsFavorite] = useState<boolean>(false);
    

    return (
        <div className={`${styles.match} ${light ? styles.themeLight : ''}`}>
            <Link href={pathname == '/' ? `/football/${id}`: `${pathname}/${id}` }></Link>
            <div className={styles.left}>
                <button 
                    className={`${styles.icon} ${isFavorite ? styles.active : ''}`}
                    onClick={() => setIsFavorite(prev => !prev)}    
                >
                    <StarIcon />
                </button>
                <div className={styles.desc}>
                    <div className={styles.date}>
                        <p>21.12.23</p>
                        <p>12:00</p>
                    </div>
                    <div className={styles.team}>
                        <p>
                            <Image 
                                src={'img/flag.svg'}
                                alt='Команда'
                                width={20}
                                height={15}
                            />
                            <span>Команда</span>
                        </p>
                        <p>
                            <Image 
                                src={'img/flag.svg'}
                                alt='Команда'
                                width={20}
                                height={15}
                            />
                            <span>Команда</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <p className={styles.bestBet}>Лучшая ставка:</p>
                <div className={styles.bet}>
                    <p className={styles.winTeam}>Победа команды 1</p>
                    <p className={styles.rate}>1.58</p>
                </div>
            </div>
        </div>
    );
};

export default memo(Match);