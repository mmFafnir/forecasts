"use client";

import React, { FC } from 'react';
import styles from './event.module.scss';
import { closeModal } from '@/GlobalRedux/Slices/modalSlice';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';

const text = `
"Галатасарай" в настоящее время демонстрирует грозную форму, одержав ряд побед подряд. Недавняя победа над "Самсунспором" со счетом 4:2, а также победа над "Газиантепом" со счетом 3:0 доказывают их мощный атакующий потенциал. Игра дома также является преимуществом "Галатасарая". С другой стороны, "Копенгаген" демонстрирует непостоянную игру. Таким образом, учитывая форму обеих команд, победа "Галатасарая" представляется беспроигрышным вариантом.
Учитывая последние результаты, преимущество домашней арены и общую результативность, победа "Галатасарая" представляется наиболее вероятным исходом.
`

const EventModal:FC = () => {
    
    const dispatch = useTypeDispatch();
    const onCloseModal = () => dispatch(closeModal())


    return (
        <div className={styles.modal}>
            <div className={styles.header}>
                <h3>Лучшая ставка: Победа Галатасарая</h3>
                <button onClick={onCloseModal}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 5L5 15" stroke="#FFD644" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M5 5L15 15" stroke="#FFD644" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className={styles.body}>
                <div className={styles.item}>
                    <p>КФ</p>
                    <p>1.58</p>
                </div>
                <div className={styles.item}>
                    <p>Риск:</p>
                    <p>Небольшой</p>
                </div>
            </div>
            <div className={styles.desc}>
                <div className={styles.item}>
                    <p>Событие:</p>
                    <p>Исход матча</p>
                </div>
                <div className={styles.item}>
                    <p>Ставка:</p>
                    <p>Победа Галатасарая, Кф: 1.60</p>
                </div>
                <div className={styles.itemDesc}>
                    <p>Анализ:</p>
                    <p>
                       {text}
                    </p>
                </div>
            </div>
            <button className="btn btn--shadow btn--pur">Сделать ставку</button>
        </div>
    );
};

export default EventModal;