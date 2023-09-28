"use client";

import { FC } from 'react';
import styles from './inputCheck.module.scss';


interface IProps {
    title: string,
    name: string,
    checked?: boolean
}

const InputRadio:FC<IProps> = ({title, name, checked=false}) => {
    return (
        <label className={styles.label}>
            <input name={name} type="radio" defaultChecked={checked}/>
            <span className={styles.icon}></span>
            <span>{title}</span>
        </label>
    );
};

export default InputRadio;