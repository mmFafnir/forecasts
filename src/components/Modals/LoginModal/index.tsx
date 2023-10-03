"use client";

import { FC } from 'react';
import styles from './loginModal.module.scss';
import Image from 'next/image';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { closeModal } from '@/GlobalRedux/Slices/modalSlice';

const LoginModal:FC = () => {

    const dispatch = useTypeDispatch();

    const onClose = () => dispatch(closeModal());


    return (
        <div className={styles.form}>
            <div className={styles.header}>
                <h5>Регистрация</h5>
                <button onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.item}>
                    <Image 
                        src={'/img/login/google.svg'}
                        width={40}
                        height={40}
                        alt='google'
                    />
                    <span>Продолжить с Google </span>
                </div>
                <div className={styles.item}>
                    <Image 
                        src={'/img/login/google.svg'}
                        width={40}
                        height={40}
                        alt='google'
                    />
                    <span>Продолжить с Google </span>
                </div>
                <div className={styles.item}>
                    <Image 
                        src={'/img/login/google.svg'}
                        width={40}
                        height={40}
                        alt='google'
                    />
                    <span>Продолжить с Google </span>
                </div>
                <div className={styles.item}>
                    <Image 
                        src={'/img/login/google.svg'}
                        width={40}
                        height={40}
                        alt='google'
                    />
                    <span>Продолжить с Google </span>
                </div>
            </div>
            <p>Нажимая на любую кнопку “продолжить”, вы соглашаетесь с условиями и признаете нашу политику конфиданциальности на нашем сайте</p>
        </div>
    );
};

export default LoginModal;