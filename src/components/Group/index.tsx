'use client';

import React, { useState } from 'react';
import styles from './group.module.scss';
import StarIcon from '../UI/Icons/StarIcon';
import Image from 'next/image';
import Match from '../Match';

const Group = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)

    return (
        <div className={styles.group}>
            <div className={styles.header}>
                <div>
                    <button 
                        className={`${styles.icon} ${isChecked ? styles.active : ''}`}
                        onClick={() => setIsChecked(prev => !prev)}
                    >
                        <StarIcon />
                    </button>
                    <div className={styles.country}>
                        <Image 
                            src={'/img/flag.svg'}
                            alt='Англия'
                            width={20}
                            height={15}
                        />
                        <p>АНГЛИЯ</p>
                        <p>Вторая Лига</p>
                        <p>Тур 5</p>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                <Match />
                <Match />
                <Match />
            </div>
        </div>
    );
};

export default Group;