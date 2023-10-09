"use client";

import React from 'react';
import styles from './countries.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import WidgetWrapper from '../../UI/WidgetWrapper';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const array = [1,2,3,4,5,6]
const Countries = () => {

    const { light } = useTypeSelector(state => state.themeLight);

    return (
        <WidgetWrapper title='Страны' imgs={['img/widget/planet.svg', 'img/widget/planet-dark.svg']}>
            <div className={`${styles.countries} ${light ? styles.themeLight : ''}`}> 
                <div className={styles.search}>
                    <input type="text" placeholder='Поиск' name="search-country"/>
                </div>
                <div className={styles.body}>
                    {
                        array.map(num => (
                            <Link key={num} href={'/'} className={styles.item}>
                                <Image 
                                    src={'/img/flag.svg'}
                                    alt='Флаг британия'
                                    width={20}
                                    height={15}
                                />
                                <span>Италия</span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </WidgetWrapper>
    );
};

export default Countries;