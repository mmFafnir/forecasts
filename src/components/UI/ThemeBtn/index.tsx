"use client";
import { FC, useEffect, useState } from 'react';
import styles from './themeBtn.module.scss';
import MoonIcon from '../Icons/MoonIcon';
import SunIcon from '../Icons/SunIcon';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { setDark, setLight } from '@/GlobalRedux/Slices/themeSlice';

const ThemeBtn:FC = () => {

    const dispatch = useTypeDispatch();
    const [isChecked, setIsChecked] = useState<boolean>(false)


    useEffect(() => {
        if(isChecked) {
            dispatch(setLight(isChecked))
        } else {
            dispatch(setDark(isChecked))
        }
    }, [isChecked])
    return (
        <div className={`${styles.btn} ${isChecked ? styles.themeLight : ''}`}>
            <MoonIcon />
            <label className={styles.input}>
                <input type="checkbox" onChange={() => setIsChecked(prev => !prev)} checked={isChecked}/>
                <span></span>
            </label>
            <SunIcon />
        </div>
    );
};

export default ThemeBtn;