import React from 'react';

import styles from './list.module.scss';
import Group from '../Group';
import Pagination from '../UI/Pagination';

const List = () => {
    return (
        <div className={styles.body}>
            <Group />
            <Group />
            <Group />
            <Group />
            <Group />

            <Pagination />
        </div>
    );
};

export default List;