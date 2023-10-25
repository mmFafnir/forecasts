"use client";

import { FC } from 'react';
import styles from './inputCheck.module.scss';
import { useTypeSelector } from '@/hooks/useTypeSelector';


interface IProps {
    title: string,
    name: string,
    checked?: boolean
}

const InputRadio:FC<IProps> = ({title, name, checked=false}) => {
    const {light} = useTypeSelector(state => state.themeLight);

    return (
        <label className={`${styles.label} ${light ? styles.themeLight : ''}`}>
            <input name={name} type="radio" defaultChecked={checked}/>
            <span className={styles.icon}></span>
            <span>{title}</span>
        </label>
    );
};

export default InputRadio;