"use client";

import { FC } from 'react'
import styles from './footer.module.scss';
import Logo from '../UI/Logo';
import Link from 'next/link';
import Socials from '../UI/Socials';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const Footer:FC = () => {

  const { light } = useTypeSelector(state => state.themeLight);

  return (
    <footer className={`${styles.body} ${light ? styles.themeLight : ''}`}>
        <div className={`${styles.wrapper} container`}>
            <div className={styles.logo}>
              <Logo />
            </div>
            <div className={styles.socials}>
              <Socials />
            </div>
            <div className={styles.nav}>
              <Link href={'/'}>Политика конфиданциальности</Link>
              <Link href={'/'}>Пользовательское соглашение</Link>
              <Link href={'/'}>Сookie</Link>
              <Link href={'/'}>Контакты</Link>
            </div>

            <div className={styles.footer}>
              <p>Copyright ©2023 Домен®. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer