
"use client";
import { FC } from 'react';
import styles from './modal.module.scss';

const Modal:FC = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.bg}></div>
            <div className={styles.wrapper}></div>
        </div>
    );
};

export default Modal;