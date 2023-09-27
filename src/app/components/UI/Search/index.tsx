"use client";

import { FC } from 'react'
import styles from './search.module.scss';
import SearchIcon from '../Icons/SearchIcon';

const Search:FC = () => {
  return (
    <div className={styles.search}>
        <div className={styles.input}>
            <input type="text" />
        </div>
        <button className={styles.icon}>
            <SearchIcon />
        </button>
    </div>
  )
}

export default Search