"use client";

import { FC, useEffect, useRef } from 'react';
import styles from '../header.module.scss';
import Link from 'next/link';
import StarIcon from '@/components/UI/Icons/StarIcon';
import { AdaptiveMenu } from '@/assets/scripts/adaptiveMenuLinks';
import { ModalEnum, openModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { usePathname } from 'next/navigation';
import { links } from '@/assets/data/links';
import Submenu from '@/components/UI/Submenu';

const HeaderBottom:FC = () => {
    const pathname = usePathname();
    const dispatch = useTypeDispatch();
    
    const menuRef = useRef<HTMLDivElement|null>(null)

    const onOpenModalSubmenu = () => dispatch(openModal(ModalEnum.SUBMENU));

    useEffect(() => {
        if(!menuRef.current) return;
        new AdaptiveMenu(menuRef.current);
    }, [])

    return (
        <>
            <div className={styles.bottom}>
                <Link href={'/favorites'} className={styles.favoritesBtn}>
                    <StarIcon />
                    <span>Избранное</span>
                </Link>
                <div ref={menuRef} className={styles.menu}>
                    {
                        links.filter((a, i) => i !== 0).map((link, index) => (
                            <Link className={`btn ${pathname === link.href ? 'active' : ''}`} href={link.href} key={index}>
                                {false ? <span className='btn__action'>3</span> : null}
                                {link.svg}
                                <span>{link.name}</span>
                            </Link>
                        ))
                    }
                </div>
                <button className='sub-menu-open' onClick={onOpenModalSubmenu}>
                    <span>Еще</span>
                    <span className={styles.mobBtn}>
                        Виды спорта
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M5 7.5L10 12.5L15 7.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
            <Submenu />
        </>
    );
};

export default HeaderBottom;