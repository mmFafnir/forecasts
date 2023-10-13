"use client";

import { FC, useEffect, useRef, useState } from 'react'
import styles from './search.module.scss';
import SearchIcon from '../Icons/SearchIcon';
import { useTypeSelector } from '@/hooks/useTypeSelector';


interface IProps {

}
const Search:FC<IProps> = () => {

  const { light } = useTypeSelector(state => state.themeLight);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement|null>(null);
  
  useEffect(() => {
    if(!inputRef.current) return;
    if(isOpen) {
      inputRef.current.focus();
    } else {
      inputRef.current.value = ''
    }
  }, [isOpen])

  return (
    <div className={`${styles.search} ${isOpen ? styles.open : ''} ${light ? styles.themeLight : ''}`}>
        <button onClick={() => setIsOpen(prev => !prev)} className={styles.icon}>
            <SearchIcon />
        </button>
        <div className={styles.input}>
            <input ref={inputRef} type="text" />
        </div>
        
    </div>
  )
}

export default Search