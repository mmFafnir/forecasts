import React from 'react';
import styles from './filterTabs.module.scss';

type TTab = {
    title: string,
    classes: string
}

const tabs:TTab[] = [
        {
            title: 'Все',
            classes: 'btn p-20 active'
        },
        {
            title: 'Топ матчи',
            classes: 'btn'
        },
        {
            title: 'Сегодня',
            classes: 'btn'
        },
        {
            title: 'Завтра',
            classes: 'btn'
        },
        {
            title: 'Завершенные',
            classes: 'btn'
        },
]

const FilterTabs = () => {
    return (
        <div className={styles.tabs}>
            <div className={styles.wrapper}>
                {
                    tabs.map(tab => (
                        <button key={tab.title} className={tab.classes}>{tab.title}</button>
                    ))
                }
            </div>
        </div>
    );
};

export default FilterTabs;