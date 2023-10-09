"use client";

import { FC } from 'react'
import { ModalEnum} from '@/GlobalRedux/Slices/modalSlice';
import LoginModal from '../Modals/LoginModal';
import HeaderBottom from './components/HeaderBottom';
import HeaderTop from './components/HeaderTop';
import Modal from '../Modals';

import styles from './header.module.scss';
import { useTypeSelector } from '@/hooks/useTypeSelector';

const Header:FC = () => {

    const { light } = useTypeSelector(state => state.themeLight);

    return (
        <>
            <header className={`${styles.header} ${light ? styles.lightTheme : ''}`}>
                <div className={`${styles.wrapper} container`}>
                    <HeaderTop />
                    <HeaderBottom />
                </div>
            </header>
            <Modal name={ModalEnum.LOGIN}>
                <LoginModal />
            </Modal>
        </>   
    )
}

export default Header