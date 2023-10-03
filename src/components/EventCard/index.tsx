"use client";

import React from 'react';
import styles from './eventCard.module.scss';
import { useTypeDispatch } from '@/hooks/useTypeDispatch';
import { ModalEnum, openModal } from '@/GlobalRedux/Slices/modalSlice';

const EventCard = () => {
    const dispatch = useTypeDispatch();
    const onOpenModal = () => dispatch(openModal(ModalEnum.EVENT));

    return (
        <div className={styles.card} onClick={onOpenModal}>
            <h3>Название события</h3>
            <div className={styles.item}>
                <p>Ставка</p>
                <p>КФ</p>
            </div>
            <div className={styles.item}>
                <p>Победа Галатасарая</p>
                <p>1.58</p>
            </div>
            <div className={styles.item}>
                <p>Риск:</p>
                <p>Небольшой</p>
            </div>
        </div>
    );
};

export default EventCard;