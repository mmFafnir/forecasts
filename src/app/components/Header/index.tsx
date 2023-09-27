"use client";

import React, { FC } from 'react'
import styles from './header.module.scss';
import Logo from '../UI/Logo';
import Search from '../UI/Search';
import PersonIcon from '../UI/Icons/PersonIcon';
import SettingIcon from '../UI/Icons/SettingIcon';
import StarIcon from '../UI/Icons/StarIcon';
import { links } from '../../data/links';
import Link from 'next/link';


const Header:FC = () => {
  return (
    <div className={styles.header}>

        <div className={`${styles.wrapper} container`}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.search}>
                    <Search />
                </div>
                <div className={styles.icons}>
                    <button>
                        <PersonIcon />
                    </button>
                    <button>
                        <SettingIcon />
                    </button>
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={styles.favoritesBtn}>
                    <StarIcon />
                    <span>Избранное</span>
                </button>
                {
                    links.map((link, index) => (
                        <Link className='btn' href={link.href} key={index}>
                            {false ? <span className='btn__action'>3</span> : null}
                            {link.svg}
                            <span>{link.name}</span>
                        </Link>
                    ))
                }
                <button>Еще</button>
            </div>
        </div>
    </div>
  )
}

export default Header