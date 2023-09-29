"use client";

import React from 'react';
import styles from './pagination.module.scss';

const Pagination = () => {
    return (
        <div className={styles.pagination}>
            <button>
                <span>Показать еще</span>
            </button>
        </div>
    );
};

export default Pagination;