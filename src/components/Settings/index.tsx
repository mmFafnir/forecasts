"use client";
import { FC, useEffect } from 'react';
import styles from './settings.module.scss';
import Select from '../UI/Select';
import { timezone } from '@/assets/data/timezone';
import InputRadio from '../UI/InputRadio';
import { getScrollBarWidth } from '@/utils/getScrollBarWidth';

interface IProps{
    open: boolean;
    setOpen: (bool: boolean) => void;
}
const Settings:FC<IProps> = ({open, setOpen}) => {
    
    const closeModal = () => setOpen(false);
    const kayDownHandler = (e: KeyboardEvent) => {
        if(e.key == "Escape") {
            closeModal()
        }
    }

    useEffect(() => {
        if(open) {
            document.body.classList.add('lock');
            document.body.style.paddingRight = getScrollBarWidth() + 'px'
        } else {
            document.body.classList.remove('lock');
            document.body.style.paddingRight = '0px'
        }
    }, [open])
    useEffect(() => {
        document.addEventListener('keydown', kayDownHandler)
        return () => {
            document.removeEventListener('keydown', kayDownHandler)    
        }
    }, [])
    
    return (
        <div className={`${styles.settings} ${open ? styles.open : ''}`}>
            <div onClick={closeModal} className={styles.bg}></div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <p>Настройки</p>
                    <button onClick={closeModal}>
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
                </div>
            </div>
        </div>
    );
};

export default Settings;