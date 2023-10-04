"use client";

import { FC } from 'react';
import styles from './submenu.module.scss';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { ModalEnum, closeModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';

const Submenu:FC = () => {
    const {activeModal} = useTypeSelector(state => state.modal)
    const dispatch = useTypeDispatch();

    const onClose = () => dispatch(closeModal());

    return (
        <div className={`${styles.body} sub-menu ${activeModal === ModalEnum.SUBMENU ? styles.active : ''}`}>
            <div onClick={onClose} className={styles.bg}></div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p>Меню</p>
                    <button onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
                <div className={`sub-menu-list ${styles.list}`}>

                </div>
            </div>
        </div>
    );
};

export default Submenu;