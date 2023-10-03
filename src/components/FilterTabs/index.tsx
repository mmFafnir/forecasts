import React, { FC } from 'react';
import styles from './filterTabs.module.scss';

type TTab = {
    title: string,
    name: string
}

interface IProps {
    tabs: TTab[];
}

const FilterTabs:FC<IProps>= ({tabs}) => {
    return (
        <div className={styles.tabs}>
            <div className={styles.wrapper}>
                {
                    tabs.map((tab, index) => (
                        <button 
                            key={tab.title} 
                            className={`btn
                                ${index === 0 ? 'active' : ''} 
                                ${tab.name === 'all' || tab.name === 'timeline' ? 'p-20' : ''}
                                ${tab.name === 'live' ? 'live p-20' : ''}
                            `}
                        >
                            <span>
                                {tab.title}
                            </span>
                        </button>
                    ))
                }   
            </div>
        </div>
    );
};

export default FilterTabs;