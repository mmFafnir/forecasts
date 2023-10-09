"use client";
import { FC, useEffect } from 'react';
import styles from './settings.module.scss';
import Select from '../UI/Select';
import { timezone } from '@/assets/data/timezone';
import InputRadio from '../UI/InputRadio';
import { getScrollBarWidth } from '@/utils/getScrollBarWidth';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { useTypeSelector } from '@/hooks/useTypeSelector';
import { ModalEnum, closeModal, openModal } from '@/GlobalRedux/Slices/modalSlice';
import ThemeBtn from '../UI/ThemeBtn';

const Settings:FC = () => {
    

    const { light } = useTypeSelector(state => state.themeLight);
    const {activeModal} = useTypeSelector(state => state.modal);
    
    const dispatch = useTypeDispatch();

    const onClose = () => dispatch(closeModal());
    const onCloseMenu = () => dispatch(openModal(ModalEnum.BURGER_MENU));

    const kayDownHandler = (e: KeyboardEvent) => {
        if(e.key == "Escape") {
            onClose()
        }
    }

    useEffect(() => {
        if(activeModal === ModalEnum.SETTINGS) {
            document.body.classList.add('lock');
            document.body.style.paddingRight = getScrollBarWidth() + 'px'
        } else {
            document.body.classList.remove('lock');
            document.body.style.paddingRight = '0px'
        }
    }, [activeModal])
    useEffect(() => {
        document.addEventListener('keydown', kayDownHandler)
        return () => {
            document.removeEventListener('keydown', kayDownHandler)    
        }
    }, [])
    
    return (
        <div className={`${styles.settings} ${light ? styles.themeLight : ''} ${activeModal === ModalEnum.SETTINGS ? styles.open : ''}`}>
            <div onClick={onClose} className={styles.bg}></div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <button className={styles.back} onClick={onCloseMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 12H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 19L5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <p>Настройки</p>
                    <button onClick={onClose}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <h3>Часовой пояс</h3>
                        <Select items={timezone} />
                    </div>
                    <div className={styles.item}>
                        <h3>Выбор языка</h3>
                        <Select items={timezone} />
                    </div>
                    <div className={styles.item}>
                        <h3>Общие настройки</h3>
                        <p>Сортировать по:</p>
                        <InputRadio title='Названию соревнования' checked={true} name="sort" />
                        <InputRadio title='Началу матча' name="sort" />
                    </div>
                    <div className={styles.item}>
                        <h3>Выбор темы</h3>
                        <ThemeBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;