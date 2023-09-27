"use client";

import React from 'react';
import styles from './countries.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import WidgetWrapper from '../../UI/WidgetWrapper';

const array = [1,2,3,4,5,6]
const Countries = () => {
    return (
        <WidgetWrapper title='Страны' img='img/planet.svg'>
            <div className={styles.countries}> 
                <div className={styles.search}>
                    <input type="text" placeholder='Поиск' name="search-country"/>
                </div>
                <div className={styles.body}>
                    {
                        array.map(num => (
                            <Link key={num} href={'/'} className={styles.item}>
                                <Image 
                                    src={'img/flag.svg'}
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