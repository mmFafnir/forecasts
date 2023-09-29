import React from 'react';
import styles from './eventCard.module.scss';

const EventCard = () => {
    return (
        <div className={styles.card}>
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