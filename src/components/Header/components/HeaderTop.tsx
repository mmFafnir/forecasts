"use client"
import { ModalEnum, openModal } from '@/GlobalRedux/Slices/modalSlice';
import PersonIcon from '@/components/UI/Icons/PersonIcon';
import SettingIcon from '@/components/UI/Icons/SettingIcon';
import Logo from '@/components/UI/Logo';
import Search from '@/components/UI/Search';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { FC, useState } from 'react';
import styles from '../header.module.scss';
import Settings from '@/components/Settings';
import BurgerIcon from '@/components/UI/Icons/BurgerIcon';
import BurgerMenu from './BurgerMenu/BurgetMenu';

const HeaderTop:FC = () => {
    const dispatch = useTypeDispatch();

    const onOpenModalLogin = () => dispatch(openModal(ModalEnum.LOGIN));
    const onOpenBurgerMenu = () => dispatch(openModal(ModalEnum.BURGER_MENU));
    const onOpenSettings = () => dispatch(openModal(ModalEnum.SETTINGS));


    return (
        <>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.search}>
                    <Search/>
                </div>
                <div className={styles.icons}>
                    <button onClick={onOpenModalLogin}>
                        <PersonIcon />
                    </button>
                    <button onClick={onOpenSettings}>
                        <SettingIcon />
                    </button>
                </div>
                <button onClick={onOpenBurgerMenu} className={styles.mobMenuBtn}>
                    <BurgerIcon />
                </button>
            </div>
            <Settings />
            <BurgerMenu />
        </>
    );
};

export default HeaderTop;